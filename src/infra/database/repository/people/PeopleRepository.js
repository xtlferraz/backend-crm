const peopleMapper = require("./PeopleMapper");
module.exports = ({ connection }) => ({
    create: async (people) => {
        return await connection("people").insert(
            peopleMapper.toDatabase(people)
        );
    },
    all: async () => {
        const result = await connection("people").select("*");
        const list = result.map((result) => peopleMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("people").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const people = await connection("people").first("*").where("id", id);
        return peopleMapper.toEntity(people);
    },
    delete: async (id) => {
        return await connection("people").where("id", id).delete();
    },
    update: async (people) => {
        const { id } = people;
        return await connection("people")
            .where("id", "=", id)
            .update(peopleMapper.toDatabase(people));
    },
});
