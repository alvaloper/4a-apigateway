const departamentoResolver = {
    Query: {
        departamentoById: async (_, {id_departamento}, {dataSources}) => {
            return await dataSources.departamentoById(id_departamento)
        }
    }
}