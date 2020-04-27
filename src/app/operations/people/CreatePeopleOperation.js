module.exports = ({ peopleService }) => ({
    execute: async (people) => {
        return await peopleService.create(people);
    },
});
