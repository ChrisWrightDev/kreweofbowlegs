import axios from 'axios';
import authHeader from './auth-header';
const url = "/api";

export default class API {
    // get all users from server
    static async getAllUsers() {
        const res = await axios.get(url, { headers: authHeader() });
        return res.data;
    }
    static async getUserByID(id) {
        const res = await axios.get(`${url}/${id}`, { headers: authHeader() });
        return res.data;
    }
    static async addUser(user) {
        const res = await axios.post(url, user, { headers: authHeader() });
        return res.data;
    }
    static async updateUser(id, user) {
        const res = await axios.patch(`${url}/${id}`, user, { headers: authHeader() });
        return res.data;
    }
    static async deleteUser(id) {
        const res = await axios.delete(`${url}/${id}`, { headers: authHeader() });
        return res.data;
    }
    static async getPamphlets() {
        const res = await axios.get(`${url}/pamphlets`);
        return res.data;
    }
    static async getPrograms() {
        const res = await axios.get(`${url}/programs`);
        return res.data;
    }
}