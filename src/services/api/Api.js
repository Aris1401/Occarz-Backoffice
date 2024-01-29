import axios from "axios";

export const LOGIN_PAGE = 'connexion1';

// Obtenir le token local
function getLocalAccessToken() {
	const accessToken = window.localStorage.getItem("accessToken");

	return accessToken;
}

// Obtenir le token de refresh
function getLocalRefreshToken() {
	const refreshToken = window.localStorage.getItem("refreshToken");

	if (!refreshToken) window.location.href = "/#/" + LOGIN_PAGE;

	return refreshToken;
}

// Refresh the token
function refreshToken() {
	let localRefreshToken = getLocalRefreshToken()
	if (!localRefreshToken) return Promise.reject();

	return axiosInstance.post("/auth/refreshtoken", {
		refreshToken: localRefreshToken
	})
}

const cloudUrl = 'https://occarz-backend-production.up.railway.app/api/v1';
const localUrl = 'http://localhost:8080/api/v1';

const axiosInstance = axios.create({
	baseURL: cloudUrl,
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

				const localRefreshToken = getLocalRefreshToken();
					if (!localRefreshToken) {
						window.location.href = '/#/' + LOGIN_PAGE;
						return Promise.reject(err.response);
					}

				try {
					refreshToken().then((data) => {
						if (data) {
							const rs = data;

							const { accessToken } = rs.data;
							window.localStorage.setItem("accessToken", accessToken);
							axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
		
							return axiosInstance(originalConfig);
						}

					}).catch((error) => {
						return axiosInstance(originalConfig);
					})
				} catch (_error) {
					if (_error.response && _error.response.data) {
						window.location.href = '/#/' + LOGIN_PAGE;
						return Promise.reject(err.response);
					}
				}
			}

			if (err.response.status === 403 && err.response.data) {
				return Promise.reject(err.response.data);
			}
		} else {
			return Promise.reject(err.response)
		}

		window.location.href = '/#/' + LOGIN_PAGE;
	}
);

export default axiosInstance;