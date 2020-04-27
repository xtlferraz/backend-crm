const User = require("../../../domain/entitities/User");

module.exports = ({ userRepository, createError, bcrypt, jwt, app }) => ({
    login: async (user) => {
        const salt = bcrypt.genSaltSync(10);
        const { email, password } = user;
        const retrieveUser = await userRepository.findByEmail(email);
        if (!retrieveUser) {
            throw createError(422, "User not found", null);
        }

        if (!bcrypt.compareSync(password, retrieveUser.password)) {
            throw createError(422, "Authentication Failed", null);
        }

        const { id } = retrieveUser;

        const token = jwt.sign({ data: id }, "mysecret", {
            expiresIn: "1h", // process.env.SECRET
        });

        return { token, id };
    },
});
