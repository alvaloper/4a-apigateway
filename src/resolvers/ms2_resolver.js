const micro2Resolver = {
    Query: {
        dptoDetailById: (_, { id_departamento }, { dataSources }) => {
                return dataSources.ms2_api.getDpto(id_departamento)
        },
        alldpto: async(root, args, { dataSources }) => {
            return await dataSources.ms2_api.getDptos();
        },
    },

    Mutation: {
        signUpDpto: async(_, { dptoInput }, { dataSources }) => {
            const dptosInput = {
                id_departamento: dptoInput.id_departamento,
                departamento: dptoInput.departamento,
            }
            return await dataSources.ms2_api.createDpto(dptosInput);
        },

        deleteDpto: async(root, { id_departamento }, { dataSources }) => {
            return await dataSources.ms2_api.deleteDpto(id_departamento);
        },

        updateDpto: async(root, args, { dataSources }) => {
            return await dataSources.ms2_api.updateDpto(args);
        },

    }
    
};
module.exports = micro2Resolver;