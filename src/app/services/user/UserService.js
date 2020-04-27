const User = require("../../../domain/entitities/User");

module.exports = ({ userRepository, createError, bcrypt }) => ({
    create: async (user) => {
        const salt = bcrypt.genSaltSync(10);
        const { name, email, password, active } = user;
        const users = new User(undefined, name, email, password, active);
        const passwordEncripty = bcrypt.hashSync(password, salt);
        users.password = passwordEncripty;
        return await userRepository.create(users);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await userRepository.get(id);
    },
    all: async () => {
        const total = await userRepository.total();
        const data = await userRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await userRepository.delete(id);
    },
    update: (user) => {
        const salt = bcrypt.genSaltSync(10);
        const passwordEncripty = bcrypt.hashSync(password, salt);
        user.password = passwordEncripty;
        return userRepository.update(user);
    },
});
