module.exports = class {
    constructor(
        id,
        name,
        description,
        email,
        active,
        phone,
        midia,
        campaign,
        user_id,
        company_id,
        unity_id,
        product_id
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.email = email;
        this.active = active;
        this.phone = phone;
        this.midia = midia;
        this.campaign = campaign;
        this.user_id = user_id;
        this.company_id = company_id;
        this.unity_id = unity_id;
        this.product_id = product_id;
    }
};
