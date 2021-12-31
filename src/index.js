const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ms1_api = require('./dataSources/ms1_api');
const ms2_api = require('./dataSources/ms2_api');
const authentication = require('./utils/authentication');


const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        ms1_api: new ms1_api(),
        ms2_api: new ms2_api(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});