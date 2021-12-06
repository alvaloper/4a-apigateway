const { gql } = require('apollo-server');

const etniaTypeDef = gql `
    type Etnia {
        id_etnia: String!
        etnia: String!
    }

    type Query {
        etniaById(id_etnia: String!): Etnia
    }
`;

module.exports = etniaTypeDef;