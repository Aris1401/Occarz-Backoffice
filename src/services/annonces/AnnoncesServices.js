import axiosInstance from "../api/Api";

export const getAnnonces = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/annonces").then((data) => {
            if (data) {
                resolve(data.data)
            } else {
                reject()
            }
        }).catch((err) => {
            
        })
    });
}

export const getAnnoncesAvecFiltres = (filtreString) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/admin/annonces?" + filtreString).then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}

export const validerAnnonce = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post("/admin/annonces/valider/" + idAnnonce).then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}

export const obtenirImagesAnnonce = (idAnnonce) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/annonces/"+ idAnnonce + "/images").then((data) => {
            resolve(data.data)
        }).catch((err) => {
            
        })
    });
}