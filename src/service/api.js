import axios from 'axios';
const url = "/api";

export default class API {
    // get all users from server
    static async getAllUsers() {
        const res = await axios.get(url);
        return res.data;
    }
    static async getUserByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async addUser(user) {
        const res = await axios.post(url, user);
        return res.data;
    }
    static async updateUser(id, user) {
        const res = await axios.patch(`${url}/${id}`, user);
        return res.data;
    }
    static async deleteUser(id) {
        const res = await axios.delete(`${url}/${id}`);
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