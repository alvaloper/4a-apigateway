//const accountResolver = require('./account_resolver');
//const transactionResolver = require('./transaction_resolver');
const usersResolver = require('./ms1_resolver');
const micro2Resolver = require('./ms2_resolver');


const lodash = require('lodash');

const resolvers = lodash.merge(usersResolver,micro2Resolver);

module.exports = resolvers;