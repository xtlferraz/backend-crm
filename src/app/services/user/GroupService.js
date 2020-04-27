const Group = require("../../../domain/entitities/Group");

module.exports = ({ groupRepository, createError }) => ({
    create: async (group) => {
        const { name, role, user_id } = group;

        const creategroup = new Group(null, name, role, user_id);

        return await groupRepository.create(creategroup);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await groupRepository.get(id);
    },
    all: async () => {
        const total = await groupRepository.total();
        const data = await groupRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await groupRepository.delete(id);
    },
    update: (group) => {
        return groupRepository.update(group);
    },
});
