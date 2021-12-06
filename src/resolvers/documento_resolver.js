const documentoResolver = {
    Query: {
        documentoById: async (_, { id }, { dataSources }) => {
            return await dataSources.DocumentoAPI.documentoById(id);
        }
    }
};

module.exports = documentoResolver;