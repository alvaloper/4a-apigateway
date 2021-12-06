const municipioResolver = {
    Query: {
        municipioById: async (_, {id_municipio}, {dataSources}) => {
            return await dataSources.MunicipioAPI.municipioById(id_municipio);
        }
    }
};

module.exports = municipioResolver;