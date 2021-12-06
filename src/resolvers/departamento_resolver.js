const departamentoResolver = {
    Query: {
        departamentoById: async (_, { id_departamento }, { dataSources }) => {
            return await dataSources.DepartamentoAPI.departamentoById(id_departamento);
        }
    }
};

module.exports = departamentoResolver;