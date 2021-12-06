const { gql } = require('apollo-server');

const municipioTypeDef = gql `
    type Municipio {
        id_municipio: String!
        municipio: String!
    }

    type Query {
        municipioById(id_municipio: String!): Municipio
    }
`;

module.exports = municipioTypeDef;