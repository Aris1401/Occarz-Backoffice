import axios from "axios";

// Obtenir le token local
function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");

  if (!accessToken) window.location.href = "/login";

  return accessToken;
}

// Obtenir le token de refresh
function getLocalRefreshToken() {
  const refreshToken = window.localStorage.getItem("refreshToken");

  if (!refreshToken) window.location.href = "/login";

  return refreshToken;
}

// Refresh the token
function refreshToken() {
  return axiosInstance.post("/auth/refreshtoken", {
    refreshToken: getLocalRefreshToken()
  });
}

const cloudUrl = 'occarz-backend-production.up.railway.app/api/v1';
const localUrl = 'http://localhost:8080/api/v1';

const axiosInstance = axios.create({
  baseURL: localUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use((config) => {
  const token = getLocalAccessToken();
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, (err) => {
  return Promise.reject(err);
})

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/connexion" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();

          // console.log(rs);
          const { accessToken } = rs.data;
          window.localStorage.setItem("accessToken", accessToken);
          axiosInstance.defaults.headers.common["x-access-token"] = accessToken;

          return axiosInstance(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            window.location.href = '/login';
            // return Promise.reject(_error.response.data);
          }

          window.location.href = '/login';
          // return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;