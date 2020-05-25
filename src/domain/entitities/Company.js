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
        fantasy_name,
        cep,
        address,
        state,
        city,
        neighborhood,
        country,
        complement,
        state_registration,
        city_registration,
        resume,
        about,
        mission,
        values,
        logo
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
        this.cep = cep;
        this.address = address;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.country = country;
        this.complement = complement;
        this.state_registration = state_registration;
        this.city_registration = city_registration;
        this.resume = resume;
        this.about = about;
        this.mission = mission;
        this.values = values;
        this.logo = logo;
    }
};
