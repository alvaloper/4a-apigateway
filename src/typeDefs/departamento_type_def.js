const { gql } = require('apollo-server');

const departamentoTypeDef = gql `
    type Departamento {
        id_departamento: String!
        departamento: String!
    }

    extend type Query {
        departamentoById(id_departamento: String!): Departamento
    }
`;

module.exports = departamentoTypeDef;