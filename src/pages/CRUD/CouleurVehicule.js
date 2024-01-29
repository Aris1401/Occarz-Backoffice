import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const CouleurVehicule = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "couleur", label: "couleur", placeholder: "Couleur"},
        {name: "code", label: "code", placeholder: "Code"}
    ]

    const colums = [
        {
            title: "Couleur",
            dataIndex: "couleur",
            key: "couleur",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("couleurVehicules").then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    couleur: item.couleur,
                    code: item.code
                }
            });


            setMarques(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = "couleurVehicules" />
  )
}

export default CouleurVehicule