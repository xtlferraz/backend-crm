module.exports = class {
    constructor(
        id,
        name,
        description,
        time_hour,
        value_hour,
        active,
        category_id
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.time_hour = time_hour;
        this.value_hour = value_hour;
        this.active = active;
        this.category_id = category_id;
    }
};
