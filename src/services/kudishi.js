// import http from '../http-common';
const axios = require('axios').default;


class KudishiService {
    // var baseUrl = "axioss://modugreens-api.herokuapp.com/";
  getAll() {
    return axios.get("/tutorials");
  }

  get(id) {
    return axios.get(`/tutorials/${id}`);
  }

  create(endpoint,data) {
    return axios.post("https://modugreens-api.herokuapp.com/"+endpoint, data);
  }

  update(id, data) {
    return axios.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return axios.delete(`/tutorials`);
  }

  findByTitle(title) {
    return axios.get(`/tutorials?title=${title}`);
  }
}

export default new KudishiService();
