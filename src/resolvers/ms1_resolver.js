const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.ms1_api.getUser(userId)
            else
                return null
        },
        ipsDetailById: (_, { id_reps }, { dataSources }) => {
                return dataSources.ms1_api.getIps(id_reps)
        },
        allips: async(root, args, { dataSources }) => {
            return await dataSources.ms1_api.getIpss();
        },
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email
            }
            return await dataSources.ms1_api.createUser(authInput);
        },

        signUpIps: async(_, { ipsInput }, { dataSources }) => {
            const ipssInput = {
                id_reps: ipsInput.id_reps,
                nombre: ipsInput.nombre,
                tipo_de_entidad: ipsInput.tipo_de_entidad,
                representante: ipsInput.representante,
                nivel_de_atencion: ipsInput.nivel_de_atencion
            }
            return await dataSources.ms1_api.createIps(ipssInput);
        },

        deleteIps: async(root, { id_reps }, { dataSources }) => {
            return await dataSources.ms1_api.deleteIps(id_reps);
        },

        updateIps: async(root, args, { dataSources }) => {
            return await dataSources.ms1_api.updateIps(args);
        },

        
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.ms1_api.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.ms1_api.refreshToken(refresh),
    }
};
module.exports = usersResolver;