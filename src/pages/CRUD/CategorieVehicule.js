import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const CRUD_REST_URL = "categorieVehicules";

const CategorieVehicule = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "nom", label: "Categorie", placeholder: "Nom de cartegorie"}
    ]

    const colums = [
        {
            title: "Categorie",
            dataIndex: "nom",
            key: "nom",
        }
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites(CRUD_REST_URL).then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    nom: item.nom
                }
            });


            setMarques(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = {CRUD_REST_URL} />
  )
}

export default CategorieVehicule