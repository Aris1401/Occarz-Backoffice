import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const CRUD_REST_URL = "nombrePlaces";

const NombrePlaces = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "nombre", label: "Nombre Places", placeholder: "Nombres de places"}
    ]

    const colums = [
        {
            title: "Places",
            dataIndex: "nombre",
            key: "nombre",
        }
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites(CRUD_REST_URL).then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    nombre: item.nombre
                }
            });


            setMarques(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = {CRUD_REST_URL} />
  )
}

export default NombrePlaces