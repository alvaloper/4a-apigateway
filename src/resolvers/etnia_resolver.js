const etniaResolver = {
    Query: {
        etniaById: async (_, {id_etnia}, {dataSources}) => {
            return await dataSources.etniaById(id_etnia)
        }
    }
}