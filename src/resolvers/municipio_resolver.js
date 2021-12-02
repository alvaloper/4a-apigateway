const municipioResolver = {
    Query: {
        municipioById: async (_, {id_municipio}, {dataSources}) => {
            return await dataSources.municipioById(id_municipio)
        }
    }
}