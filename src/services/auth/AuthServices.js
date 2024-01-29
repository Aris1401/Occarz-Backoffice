import axiosInstance, { LOGIN_PAGE } from "../api/Api";

export const sendLoginInformations = (loginInfos) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/auth/connexion", loginInfos).then((data) => {
            var response = data.data;

            window.localStorage.setItem("role", response.data);
            window.localStorage.setItem("accessToken", response.token);
            window.localStorage.setItem("refreshToken", response.refreshToken);

            window.location.href = '/#/statistique';
        }).catch((error) => {
            console.log("Vous devez refaire une requete de connexion.");
        })
    });
}

export const doLogOut = () => {
    axiosInstance.post("/auth/deconnexion").then((data) => {
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
        
        window.location.href = "/#/" + LOGIN_PAGE;
    })
}