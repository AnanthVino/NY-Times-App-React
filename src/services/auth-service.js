import axios from "axios";

const API_URL = "http://localhost:8000/auth/";

const register = (email, password) => {
  return axios.post(API_URL+"register", {
    email,
    password
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL+"login", {
      email,
      password
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
      return response.data;
    })
    .catch((error) => {
      console.log(error)
    })
};

const logout = () => {
  return localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout
};
