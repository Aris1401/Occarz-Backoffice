import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const BoiteDeVitesse = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "nom", label: "nom", placeholder: "Nom boite de vitesse"}
    ]

    const colums = [
        {
            title: "Boite de vitesse",
            dataIndex: "nom",
            key: "nom",
        }
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("boiteDeVitesses").then((data) => {
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
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = "boiteDeVitesses" />
  )
}

export default BoiteDeVitesse