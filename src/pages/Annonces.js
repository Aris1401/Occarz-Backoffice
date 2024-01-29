import { Card, Flex, Pagination, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Annonce from '../components/annonce/Annonce';
import { getAnnonces, getAnnoncesAvecFiltres } from '../services/annonces/AnnoncesServices';

const fieldFilterValues = [
    { value: 'field=date&ordre=ASC', label: "Les plus recents" },
    { value: 'field=date&ordre=DESC', label: "Les plus anciens" },
    { value: 'field=prix&ordre=ASC', label: "Les plus mois chere" },
    { value: 'field=prix&ordre=DESC', label: "Les plus chere" },
]

const Annonces = () => {
    const { Title, Paragraph } = Typography;
    const [update, setUpdate] = useState(false)

    const updatePage = () => {
        setUpdate(!update)
    }

    // Annonces
    const [annonces, setAnnonces] = useState([])
    const [totalResultats, setTotalResultats] = useState(0)

    useEffect(() => {
        getAnnonces().then((data) => {
            let response = data.data;
            console.log(response);

            setTotalResultats(response.nombreResultats)
            setAnnonces(response.annoncesFiltrees)
        })
    }, [update])

    // Pagination
    const TOTAL_ONE_PAGE = 3;
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(TOTAL_ONE_PAGE - 1);

    const handlePaginationChange = (page) => {
        let newStart = (page - 1) * TOTAL_ONE_PAGE;
        let newEnd = newStart + TOTAL_ONE_PAGE - 1;

        console.log(`${newStart} - ${newEnd}`)

        setStartIndex(newStart);
        setEndIndex(newEnd);
    }

    return (

        <div style={{ height: '100%' }}>
            <Card className='h-full'>
                <Flex vertical gap={10}>
                    <Flex justify='space-between' >
                        <Title level={4} >Annonces en attente de validations</Title>

                        <Select
                            defaultValue={"field=date&ordre=ASC"}
                            style={{ width: 200 }}
                            options={fieldFilterValues}

                            onChange={(value) => {
                                getAnnoncesAvecFiltres(value).then((data) => {
                                    let response = data.data;
                                    console.log(response);

                                    setTotalResultats(response.nombreResultats)
                                    setAnnonces(response.annoncesFiltrees)
                                })
                            }}
                        />
                    </Flex>

                    <Flex vertical gap={10}>
                        {annonces.map((annonce, index) => {
                            if (index >= startIndex && index <= endIndex) return <Annonce key={index} annonce={annonce} update={updatePage} />
                        })}
                    </Flex>

                    <Flex justify='flex-end'>
                        <Pagination defaultCurrent={1} total={totalResultats} onChange={(page) => handlePaginationChange(page)} pageSize={TOTAL_ONE_PAGE} pageSizeOptions={[TOTAL_ONE_PAGE]} showTotal={(total) =>
                            'Total de ' + total + ' annonces'
                        } />
                    </Flex>
                </Flex>
            </Card>
        </div>

    )
}

export default Annonces