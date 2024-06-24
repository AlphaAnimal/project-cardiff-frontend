import axios from "axios";

export const register = async (userData: any) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData: any) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logout = async () => {
  localStorage.setItem("user", "");
};
