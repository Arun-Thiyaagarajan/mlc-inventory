import apiClient from "./api";

const authService = {
  register: (userData) => apiClient.post("/auth/register", userData),
  login: (credentials) => apiClient.post("/auth/login", credentials),
  logout: () => apiClient.delete("/auth/logout"),
};

export default authService;
