import type { LoginData, LoginResponse } from "../types/auth";
import { api } from "./api";

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
};
