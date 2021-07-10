import axios from "axios";

export default {

  login: function(loginData) {
    return axios.post("http://localhost:3001/api/users/login", loginData);
  },
  signUp: function(loginData) {
    return axios.post("http://localhost:3001/api/users/signup", loginData);
  }
};
