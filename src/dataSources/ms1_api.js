const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class AuthAPI extends RESTDataSource {


    constructor() {
        super();
        this.baseURL = serverConfig.ms1_url;
    }

    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    async getUser(userId) {
        return await this.get(`/user/${userId}/`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

    async getIps(id_reps) {
        return await this.get(`/ips/${id_reps}/`);
    }

    async createIps(id_reps) {
        id_reps = new Object(JSON.parse(JSON.stringify(id_reps)));
        return await this.post(`/ips/`, id_reps);
    }

    async deleteIps(id_reps) {
        return await this.delete(`/ips/${id_reps}`);
    }

    async updateIps(data) {
        const { id_reps, ...body } = data;
        return await this.put(`/ips/${id_reps}/`, body);
    }

    async getIpss() {
        return await this.get("/ips");
    }

}
module.exports = AuthAPI;