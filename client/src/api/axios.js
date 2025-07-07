import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // 🧠 change /api if your backend route differs
  withCredentials: true, // If you're using cookies/sessions
});

export default API;
