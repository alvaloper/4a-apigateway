const { RESTDataSource } = require('apollo-datasource-rest')
const serverConfig = require("../server");

class EtniaAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.ms2_api_url
    }

    async etniaById(id_etnia){
        return await this.get(`/etnia/${id_etnia}`);
    }
};

module.exports = EtniaAPI;