import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const Marque = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "nom", label: "Nom", placeholder: "Nom de marque"}
    ]

    const colums = [
        {
            title: "Nom marque",
            dataIndex: "nom",
            key: "nom",
        }
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("marques").then((data) => {
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
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = "marques" />
  )
}

export default Marque