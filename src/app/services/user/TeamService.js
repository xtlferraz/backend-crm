const Team = require("../../../domain/entitities/Team");

module.exports = ({ teamRepository, createError }) => ({
    create: async (team) => {
        const { name, description, active, people_id } = team;

        const createTeam = new Team(null, name, description, active, people_id);

        return await teamRepository.create(createTeam);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await teamRepository.get(id);
    },
    all: async () => {
        const total = await teamRepository.total();
        const data = await teamRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await teamRepository.delete(id);
    },
    update: (team) => {
        return teamRepository.update(team);
    },
});
