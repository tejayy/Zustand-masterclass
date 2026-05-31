import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
