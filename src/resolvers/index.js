const departamentoResolver = require('./departamento_resolver')
const lodash = require('lodash')

const resolvers = lodash.merge(departamentoResolver);

module.exports = resolvers;