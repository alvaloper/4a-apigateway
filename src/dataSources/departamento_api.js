const { RESTDataSource } = require('apollo-datasource-rest')
const serverConfig = require("../server");

class DepartamentoAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.ms2_api_url;
    }

    async departamentoById(id_departamento){
        return await this.get(`/departamento/${id_departamento}`);
    }
}

module.exports = DepartamentoAPI;