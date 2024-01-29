import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const AnneeModele = () => {
    const {Title} = Typography;

    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("modeles").then((data) => {
            setMarques(data.data.map(item => {
                return { value: item.id, label: item.nom }
            }))
        })
    }, [])

    const formInputs = [
        {name: "annee", label: "Annee", placeholder: "Annee de modele"},
        {name: "modele", label: "Modele", type: "select", options: marques}
    ]

    const colums = [
        {
            title: "Annee modele",
            dataIndex: "annee",
            key: "annee",
        },
        {
            title: "Modele",
            dataIndex: "modele",
            key: "modele",
        }
    ]

    // Obtenir marques
    const [ modeles, setModeles ] = useState([])
    useEffect(() => {
        obtenirEntites("anneeModeles").then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    annee: item.annee,
                    modele: item.modele.nom
                }
            });


            setModeles(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={modeles} columnsData={colums} entityName = "modeles" />
  )
}

export default AnneeModele