//Se llama al typedef (esquema) de cada submodulo
//const accountTypeDefs = require('./account_type_defs');
//const transactionTypeDefs = require('./transaction_type_defs');
const ms1typedef = require('./ms1_type_def');
const ms2typedef = require('./ms2_type_def');

//Se unen
const schemasArrays = [ms1typedef,ms2typedef];

//Se exportan
module.exports = schemasArrays;