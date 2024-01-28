import axiosInstance from "../api/Api"

export const getStatistiquesAnnees = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('admin/statistiques/annees')
        .then(data => {
            resolve(data.data);
        })
    });
}

export const getMois = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('admin/statistiques/mois')
        .then(data => {
            resolve(data.data);
        })
    })
}

export const getDetailsCommisions = (annee) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`admin/statistiques/commissions?annee=${annee}`)
        .then(data => {
            resolve(data.data);
        })
    })
}

export const getDetailsVente = (annee, mois) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`admin/statistiques/ventes?annee=${annee}&mois=${mois}`)
        .then(data => {
            resolve(data.data);
        })
    })
}

export const getDetailsVenteMarque = (annee, mois) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`admin/statistiques/ventes/marques?annee=${annee}&mois=${mois}`)
        .then(data => {
            resolve(data.data);
        })
    })
}

export const getCommisions = (annee) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`admin/statistiques/commissions/${annee}`)
        .then(data => {
            resolve(data.data);
        })
    })
}