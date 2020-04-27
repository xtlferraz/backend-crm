const companyMapper = require("./CompanyMapper");
module.exports = ({ connection }) => ({
    create: async (company) => {
        return await connection("company").insert(
            companyMapper.toDatabase(company)
        );
    },
    all: async () => {
        const result = await connection("company").select("*");
        const list = result.map((result) => companyMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("company").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const company = await connection("company").first("*").where("id", id);
        return companyMapper.toEntity(company);
    },
    delete: async (id) => {
        return await connection("company").where("id", id).delete();
    },
    update: async (company) => {
        const { id } = company;
        return await connection("company")
            .where("id", "=", id)
            .update(companyMapper.toDatabase(company));
    },
});
