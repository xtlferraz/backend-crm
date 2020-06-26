module.exports = class {
    constructor(id, name, email, password, active) {
        this.id = id;
        this.name = name;
        this.email = trim(email);
        this.password = password;
        this.active = active;
    }
};
