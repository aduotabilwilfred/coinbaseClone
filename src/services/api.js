import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (name, email, password) =>
  api.post("/register", { name, email, password });

export const loginUser = (email, password) =>
  api.post("/login", { email, password });

export const getProfile = () => api.get("/profile");

export const getAllCryptos = () => api.get("/crypto");

export const getTopGainers = () => api.get("/crypto/gainers");

export const getNewListings = () => api.get("/crypto/new");

export const addCrypto = (data) => api.post("/crypto", data);

export default api;
