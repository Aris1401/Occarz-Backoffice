import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import eChart from '../configs/eChart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Select, Typography } from 'antd';
import { getDetailsCommisions } from '../../../services/statistiques/StatistiquesServices';
import numeral from 'numeral';

const commissionChartOptions = {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre"
      ],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 260,
        style: {
          colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff"
          ],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 260,
        style: {
          colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
          ],
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return numeral(val).format("0,0") + " Ar";
        },
      },
    },
}

const CommissionMoisChart = (props) => {
    // Obtenir les annees disponibles
    const { annees, mois } = props;

    // Obtenir les mois de l'annee
    commissionChartOptions.xaxis.categories = mois;

    // Series de donnnes
    const [ donnees, setDonnees] = useState([])

    const { Title, Paragraph } = Typography;

  return (
    <>
        <div className='chart'>
            <ReactApexChart
                className="bar-chart"
                options={commissionChartOptions}
                series={donnees}
                type="bar"
                height={220}
            />
        </div>

        <div className='mt-2 md-0 d-flex justify-content-between'>
            <Select 
            style={{width: 120}}
              defaultValue={annees[0]}
              options={annees.map(annee => {
                return {value: annee, label: annee}
              })}
              onChange={(value) => {
                getDetailsCommisions(value).then(data => {
                  // alert(JSON.stringify(data))
                  setDonnees(
                    [{
                      name: "Commissions",
                      data: data.data,
                      color: '#fff'
                    }])
                });
              }}
            />
            <Paragraph className='md-0 font-weight-bold text-muted'><b>Commission par mois</b></Paragraph>
        </div>
    </>
  )
}

export default CommissionMoisChart