import axios from "axios";

const api = axios.create({
  baseURL: "https://ped-hospitalar-backend.onrender.com/api",
});

export default api;
