const { gql } = require('apollo-server');
const ms1typedef = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type Message {
        message: String!
    }

    type IpsDetail {
        id_reps: String!
        nombre: String!
        tipo_de_entidad: String!
        representante: String!
        nivel_de_atencion: String!
    }

    input IpsInput {
        id_reps: String!
        nombre: String!
        tipo_de_entidad: String!
        representante: String!
        nivel_de_atencion: String!
    }

    input IpsInputUpdate {
        id_reps: String!
        nombre: String!
        tipo_de_entidad: String!
        representante: String!
        nivel_de_atencion: String!
    }

    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        signUpIps(ipsInput :IpsInput): IpsDetail!
        deleteIps(id_reps: String!): IpsDetail
        updateIps(
            id_reps: String!
            nombre: String!
            tipo_de_entidad: String!
            representante: String!
            nivel_de_atencion: String!
        ): IpsDetail
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
        ipsDetailById(id_reps: String!): IpsDetail!
        allips: [IpsDetail]
    }
`;
module.exports = ms1typedef;