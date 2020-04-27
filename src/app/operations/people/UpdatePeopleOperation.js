module.exports = ({ peopleService }) => ({
    execute: (people) => {
        return peopleService.update(people);
    },
});
