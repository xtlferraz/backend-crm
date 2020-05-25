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
        short_name,
        cep,
        address,
        state,
        city,
        neighborhood,
        country,
        complement,
        rg,
        cnh,
        dispatching_agency,
        resume,
        about,
        object,
        formation,
        institution,
        office,
        hobby,
        photograph
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
        this.cep = cep;
        this.address = address;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.country = country;
        this.complement = complement;
        this.rg = rg;
        this.cnh = cnh;
        this.dispatching_agency = dispatching_agency;
        this.resume = resume;
        this.about = about;
        this.object = object;
        this.formation = formation;
        this.institution = institution;
        this.office = office;
        this.hobby = hobby;
        this.photograph = photograph;
    }
};
