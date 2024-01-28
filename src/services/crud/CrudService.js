import axiosInstance from "../api/Api";

export const obtenirEntites = (nom) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/" + nom).then((data) => {
            resolve(data.data)
        })
    });
}

export const sauvegarderEntite = (nom, data) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/admin/" + nom, data).then((data) => {
            resolve(data.data)
        })
    });
}

export const supprimerEntite = (nom, id) => {
    return new Promise((resolve, reject) => {
        axiosInstance.delete("/admin/" + nom + "/" + id).then((data) => {
            resolve(data.data)
        })
    });
}

export const mettreAJourEntite = (nom, data) => {
    return new Promise((resolve, reject) => {
        axiosInstance.put("/admin/" + nom, data).then((data) => {
            resolve(data.data)
        })
    });
}

export const obtenirEntitesParId = (nom, id) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/" + nom + "/" + id).then((data) => {
            resolve(data.data)
        })
    });
}