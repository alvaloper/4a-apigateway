const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class Micro2API extends RESTDataSource {


    constructor() {
        super();
        this.baseURL = serverConfig.ms2_url;
    }

    async getDpto(id_departamento) {
        return await this.get(`api/departamento/${id_departamento}/`);
    }

    async createDpto(id_departamento) {
        id_departamento = new Object(JSON.parse(JSON.stringify(id_departamento)));
        return await this.post(`api/departamento/`, id_departamento);
    }

    async getDptos() {
        return await this.get("api/departamento");
    }

    async deleteDpto(id_departamento) {
        return await this.delete(`api/departamento/${id_departamento}`);
    }

    async updateDpto(data) {
        const { id_departamento, ...body } = data;
        return await this.put(`api/departamento/${id_departamento}/`, body);
    }

}
module.exports = Micro2API;