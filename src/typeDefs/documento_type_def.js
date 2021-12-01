const { gql } = require('apollo-server');

const documentoTypeDef = gql `
    type Documento {
        id: String!
        tipodocumento: String!
    }

    type Query {
        documentoById(id: String!): Documento
    }
`;

module.exports = documentoTypeDef;