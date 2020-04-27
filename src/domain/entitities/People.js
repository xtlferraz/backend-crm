module.exports = class {
    constructor(id, name, cpf, dtNascimento, sexo, active, email, user_id) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento;
        this.sexo = sexo;
        this.active = active;
        this.email = email;
        this.user_id = user_id;
    }
};
