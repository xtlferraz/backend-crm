const API = ({
    getEventOperation,
    getAllEventOperation,
    createEventOperation,
    updateEventOperation,
    deleteEventOperation,
}) => ({
    getEvent: async (req, res) => {
        const event = await getEventOperation.execute(req.params.id);
        res.send({ status: 200, result: event });
    },
    getAll: async (req, res) => {
        const event = await getAllEventOperation.execute();
        res.setHeader("X-Total-Count", event.total);
        res.send({ status: 200, result: event.data });
    },
    createEvent: async (req, res) => {
        const result = await createEventOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateEvent: async (req, res) => {
        const result = await updateEventOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteEvent: async (req, res) => {
        await deleteEventOperation.execute(req.params.id);
        const event = await getEventOperation.execute(req.params.id);
        res.send({ status: 200, result: event });
    },
});

module.exports = API;
