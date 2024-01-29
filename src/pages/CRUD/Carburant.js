import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const CRUD_REST_URL = "carburants";

const Carburant = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "nom", label: "Nom", placeholder: "Nom de carburant"}
    ]

    const colums = [
        {
            title: "Nom carburant",
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

export default Carburant