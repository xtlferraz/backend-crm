module.exports = class {
    constructor(
        id,
        name,
        cnpj,
        dtNascimento,
        sexo,
        active,
        email,
        user_id,
        fantasy_name
    ) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.dtNascimento = dtNascimento || "";
        this.sexo = sexo;
        this.active = active || false;
        this.email = email;
        this.user_id = user_id;
        this.fantasy_name = fantasy_name;
    }
};
