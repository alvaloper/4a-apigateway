const documentoResolver = {
    Query: {
        documentoById: async (_, {id}, {dataSources}) => {
            return await dataSources.documentoById(id)
        }
    }
}