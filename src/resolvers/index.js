const departamentoResolver = require('./departamento_resolver')
const documentoResolver = require('./documento_resolver')
const etniaResolver = require('./etnia_resolver')
const municipioResolver = require('./municipio_resolver')
const lodash = require('lodash')

const resolvers = lodash.merge(departamentoResolver, documentoResolver, etniaResolver, municipioResolver);

module.exports = resolvers;