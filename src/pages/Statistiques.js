import { Card, Col, Flex, Row, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import LineChart from '../components/chart/LineChart';
import CommissionMoisChart from '../components/chart/statistiques/CommissionMoisChart';
import { getCommisions, getMois, getStatistiquesAnnees } from '../services/statistiques/StatistiquesServices';
import VentesMoisAnnees from '../components/chart/statistiques/VentesMoisAnnees';
import VentesMarqueLineChart from '../components/chart/statistiques/VentesMarqueLineChart';
import numeral from 'numeral';
import { DollarOutlined } from '@ant-design/icons';

const Statistiques = () => {
    const { Title, Text } = Typography;

    // Obtenir les annees disponibles
    const [ annees, setAnees ] = useState([])
    useEffect(() => {
        getStatistiquesAnnees().then(data => {
            setAnees(data.data);
        })
    }, [])

    // Obtenir les mois de l'annee
    const [ mois, setMois ] = useState([])
    useEffect(() => {
        getMois().then(data => {
            setMois(data.data)
        })
    },[])

    // Statistiques en nombre
    const statistiquesNombres = [
        {
            today: "Commission total",
            title: "0Ar",
            persent: "",
            icon: <DollarOutlined />,
            bnb: ""
        },
        // {
        //     today: "Nombre de ventes",
        //     title: "0",
        //     persent: "",
        //     icon: "",
        //     bnb: ""
        // }
    ];
    const [ statistiques, setStatistiques ] = useState(statistiquesNombres);

    // Obtenir le commission d'une annee
    const handleCommissionChange = (value, index) => {
        getCommisions(value).then(data => {
            let response = numeral(data.data).format('0,0');
            statistiquesNombres[index].title = `${response}Ar`;
            setStatistiques(statistiquesNombres);
        })
    }

    useEffect(() => {
        console.log(statistiques)
    }, [statistiques])

  return (
    <div className='layout-content'>
        {/* Statistiques nombres */}
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {statistiques && statistiques.map((c, index) => (
            <Col
              key={index}
              xs={30}
              sm={30}
              md={24}
              lg={10}
              xl={10}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                      <Select
                        style={{ width: 100 }}
                        defaultValue={annees[0]}
                        options={annees.map(annee => {
                            return { value: annee, label: annee }
                        })}
                        onChange={(value) => handleCommissionChange(value, index)}
                    />
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Flex gap='middle' vertical>
                <Card bordered={false} className="criclebox">
                <CommissionMoisChart annees={annees} mois={mois} />
                </Card>

                <Card bordered={false} className="criclebox">
                <VentesMarqueLineChart annees={annees} mois={mois} />
                </Card>
            </Flex>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox">
              <VentesMoisAnnees annees={annees} mois={mois} />
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default Statistiques