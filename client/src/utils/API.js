import axios from "axios";

export default {
  login: function(loginData) {
    return axios.post("https://ticket-scalper-12345.herokuapp.com/api/users/login", loginData);
  },
  signUp: function(loginData) {
    return axios.post("https://ticket-scalper-12345.herokuapp.com/api/users/signup", loginData);
  },
  events: async function(queryparams) {
    let data = await axios.get("https://ticket-scalper-12345.herokuapp.com/api/events?"+queryparams);
    return data;
  }
};
