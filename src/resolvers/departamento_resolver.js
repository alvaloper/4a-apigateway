const departamentoResolver = {
    Query: {
        departamentoById: async (_, {id_departamento}, {dataSource}) => {
            return await dataSource.departamentoById(id_departamento)
        }
    }
}