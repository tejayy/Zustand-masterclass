export interface User {
  id: string;
  name: string;
  email: string;
  //   password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}
