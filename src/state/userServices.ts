import axios from "axios";
import { baseUrl } from "../utils/constants";

export const register = async (userData: any) => {
  const response = await axios.post(baseUrl + "/api/users/", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData: any) => {
  const response = await axios.post(baseUrl + "/api/users/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logout = async () => {
  localStorage.setItem("user", "");
};
