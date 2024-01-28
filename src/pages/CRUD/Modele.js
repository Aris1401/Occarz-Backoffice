import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const Modele = () => {
    const {Title} = Typography;

    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("marques").then((data) => {
            setMarques(data.data.map(item => {
                return { value: item.id, label: item.nom }
            }))
        })
    }, [])

    const formInputs = [
        {name: "nom", label: "Nom", placeholder: "Nom de modele"},
        {name: "marque", label: "Marque", type: "select", options: marques}
    ]

    const colums = [
        {
            title: "Nom modele",
            dataIndex: "nom",
            key: "nom",
        },
        {
            title: "Nom marque",
            dataIndex: "marque",
            key: "marque",
        }
    ]

    // Obtenir marques
    const [ modeles, setModeles ] = useState([])
    useEffect(() => {
        obtenirEntites("modeles").then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    nom: item.nom,
                    marque: item.marque.nom
                }
            });


            setModeles(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={modeles} columnsData={colums} entityName = "modeles" />
  )
}

export default Modele