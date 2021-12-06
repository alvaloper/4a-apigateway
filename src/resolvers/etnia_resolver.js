const etniaResolver = {
    Query: {
        etniaById: async (_, {id_etnia}, {dataSources}) => {
            return await dataSources.EtniaAPI.etniaById(id_etnia);
        }
    }
};

module.exports = etniaResolver;