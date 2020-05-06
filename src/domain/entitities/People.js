module.exports = class {
    constructor(
        id,
        name,
        cpf,
        dtNascimento,
        sexo,
        active,
        email,
        user_id,
        short_name
    ) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento || "";
        this.sexo = sexo;
        this.active = active || false;
        this.email = email;
        this.user_id = user_id;
        this.short_name = short_name;
    }
};
