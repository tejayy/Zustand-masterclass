import type {
  LoginData,
  LoginResponse,
  RegisterData,
  RegisterResponse,
} from "../types/auth";
import { api } from "./api";

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
};

export const registerUser = async (
  data: RegisterData,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/auth/signup", data);
  return response.data;
};
