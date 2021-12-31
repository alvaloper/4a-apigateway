const { gql } = require('apollo-server');
const ms2typedef = gql `

    type DptoDetail {
        id_departamento: String!
        departamento: String!
    }

    input DptoInput {
        id_departamento: String!
        departamento: String!
    }

    type Mutation {
        signUpDpto(dptoInput :DptoInput): DptoDetail!
        deleteDpto(id_departamento: String!): DptoDetail
        updateDpto(
            id_departamento: String!
            departamento: String!
        ): DptoDetail
    }

    type Query {
        dptoDetailById(id_departamento: String!): DptoDetail!
        alldpto: [DptoDetail]
    }
`;
module.exports = ms2typedef;