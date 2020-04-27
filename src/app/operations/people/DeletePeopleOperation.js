module.exports = ({ peopleService }) => ({
    execute: (id) => {
        return peopleService.delete(id);
    },
});
