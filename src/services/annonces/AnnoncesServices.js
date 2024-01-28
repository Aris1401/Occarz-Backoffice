import axiosInstance from "../api/Api";

export const getAnnonces = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/annonces").then((data) => {
            resolve(data.data)
        })
    });
}

export const getAnnoncesAvecFiltres = (filtreString) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/annonces?" + filtreString).then((data) => {
            resolve(data.data)
        })
    });
}

export const validerAnnonce = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/admin/annonces/valider/" + idAnnonce).then((data) => {
            resolve(data.data)
        })
    });
}