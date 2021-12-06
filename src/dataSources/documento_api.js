const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require("../server");

class DocumentoAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.ms2_api_url;
    }

    async documentoById(id){
        return await this.get(`/api/documentos/${id}`);
    }
};

module.exports = DocumentoAPI;