import React, { useEffect, useState } from 'react'
import CrudComponent from '../../components/crud/CrudComponent'
import { obtenirEntites } from '../../services/crud/CrudService'
import { Typography } from 'antd'

const Configuration = () => {
    const {Title} = Typography;

    const formInputs = [
        {name: "commission", label: "commission", placeholder: "Commission du site"}
    ]

    const colums = [
        {
            title: "Commission",
            dataIndex: "commission",
            key: "commission",
        }
    ]

    // Obtenir marques
    const [ marques, setMarques ] = useState([])
    useEffect(() => {
        obtenirEntites("configuration").then((data) => {
            let dataList = data.data.map(item => {
                return {
                    key: item.id,
                    commission: item.commission
                }
            });


            setMarques(dataList)
        })
    }, [])

  return (
    <CrudComponent formInputs={formInputs} data={marques} columnsData={colums} entityName = "configuration" />
  )
}

export default Configuration