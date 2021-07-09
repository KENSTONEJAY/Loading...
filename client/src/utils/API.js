import axios from "axios";

export default {

  login: function(loginData) {
    return axios.post("http://localhost:3001/api/users/login", loginData);
  },
  signUp: function(loginData) {
    return axios.post("http://localhost:3001/api/users/signup", loginData);
  },
  events: async function(queryparams) {
    let data = await axios.get("http://localhost:3001/api/events?"+queryparams);
    return data;
  }
};
