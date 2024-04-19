import axios from "axios";
import React, { useState } from "react";
import { Chart } from 'primereact/chart';
import "./grafico-recomendacoes.css";

const GraficoRecomendacoes = () => {

    const [chartData] = useState({
        labels: ['Positivas', 'Negativas'],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: [
                    "#BADA55",
                    "#DC3146",
                    
                ],
                hoverBackgroundColor: [
                    "#BADA55",
                    "#DC3146",

                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    

    const getGraficoResults = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {

        })
    }

    return(
        <>
    <div className="card-recomendacoes card d-flex justify-content-center align-items-center grafico-container">
        <span className="texto-recomendacoes">Número de Recomendações</span>
        <div className="grafico">
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '60%', height: '100%' }} />
        </div>
    </div>

        </>
    )
}

export default GraficoRecomendacoes;