const Event = require("../../../domain/entitities/Event");

module.exports = ({ eventRepository, createError }) => ({
    create: async (event) => {
        const { name, description, date_include, active, team_id } = event;

        const createEvent = new Event(
            undefined,
            name,
            description,
            date_include,
            active,
            team_id
        );

        return await eventRepository.create(createEvent);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await eventRepository.get(id);
    },
    all: async () => {
        const total = await eventRepository.total();
        const data = await eventRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await eventRepository.delete(id);
    },
    update: (event) => {
        return eventRepository.update(event);
    },
});
