const { RESTDataSource } = require('apollo-datasource-rest')
const serverConfig = require("../server");

class MunicipioAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.ms2_api_url;
    }

    async municipioById(id_municipio){
        return await this.get(`/municipio/${id_municipio}`);
    }
}

module.exports = MunicipioAPI;