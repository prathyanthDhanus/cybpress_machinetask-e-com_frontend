import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to refresh tokens
const refreshAuthToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken"); 
    if (!refreshToken) throw new Error("Refresh token not found");

    const response = await apiClient.post("/api/auth/refresh-token", { refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data.data;

    // Update tokens in localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);

    return accessToken; // Return the new access token
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error; // Rethrow error to handle logout if needed
  }
};

// Add request interceptor to attach access token
apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle token expiration
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is due to expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loop

      try {
        const newAccessToken = await refreshAuthToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest); // Retry the original request with the new token
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
