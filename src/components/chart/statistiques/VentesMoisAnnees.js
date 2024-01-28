import { MinusOutlined } from '@ant-design/icons';
import { Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import lineChart from '../configs/lineChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDetailsVente } from '../../../services/statistiques/StatistiquesServices';

const venteChartConfig = {
    chart: {
        width: "100%",
        height: 350,
        type: "area",
        toolbar: {
            show: false,
        },
    },

    legend: {
        show: false,
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },

    yaxis: {
        labels: {
            style: {
                fontSize: "14px",
                fontWeight: 600,
                colors: ["#8c8c8c"],
            },
        },
    },

    xaxis: {
        labels: {
            style: {
                fontSize: "14px",
                fontWeight: 600,
                colors: [
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                    "#8c8c8c",
                ],
            },
        },
        //   categories: [
        //     "Feb",
        //     "Mar",
        //     "Apr",
        //     "May",
        //     "Jun",
        //     "Jul",
        //     "Aug",
        //     "Sep",
        //     "Oct",
        //   ],
    },

    tooltip: {
        y: {
            formatter: function (val) {
                return val;
            },
        },
    },
};

const VentesMoisAnnees = (props) => {
    const { Title, Paragraph } = Typography;

    // Mois et annees
    const { annees, mois } = props;

    // Selections
    const [selectedAnnee, setSelectedAnnee] = useState(undefined)
    const [selectedMois, setSelectedMois] = useState(undefined)

    // Donnees
    const [ donnees, setDonnees ] = useState([])

    useEffect(() => {
        if (selectedAnnee == undefined || selectedMois === undefined) return;

        getDetailsVente(selectedAnnee, selectedMois).then(data => {
            setDonnees([
                {
                    name: "Ventes",
                    data: data.data,
                    color: "#0ff"
                }
            ])
        })
    }, [selectedAnnee, selectedMois])

    return (
        <>
            <div className='linechart'>
                <div>
                    <Title level={5}>Totales ventes</Title>
                </div>
                <div className="sales gap-1">
                    <Select
                        style={{ width: 120 }}
                        defaultValue={annees[0]}
                        options={annees.map(annee => {
                            return { value: annee, label: annee }
                        })}
                        onChange={(value) => setSelectedAnnee(value)}
                    />

                    <Select
                        style={{ width: 120 }}
                        defaultValue={mois[0]}
                        options={mois.map((item, index) => {
                            return { value: index, label: item }
                        })}
                        onChange={(value) => setSelectedMois(value + 1)}
                    />

                    <ul>
                        {/* <li>{<MinusOutlined />} Traffic</li>
                <li>{<MinusOutlined />} Sales</li> */}
                    </ul>
                </div>

            </div>
            <ReactApexChart
                className="full-width"
                options={venteChartConfig}
                series={donnees}
                type="area"
                height={350}
                width={"100%"}
            />
        </>
    )
}

export default VentesMoisAnnees