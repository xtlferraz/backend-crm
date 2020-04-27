module.exports = ({ peopleService }) => ({
    execute: (id) => {
        return peopleService.get(id);
    },
});
