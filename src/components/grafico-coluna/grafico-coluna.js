import axios from "axios";
import React, { useState } from "react";
import { Chart } from 'primereact/chart';

import "./grafico-coluna.css";

const GraficoColuna = () => {

    const [multiAxisData] = useState({
        labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
        datasets: [{
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
            ],
            yAxisID: 'y',
            data: [65, 59, 80, 81, 56]
        }]
    });

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'bottom'
            }
        },
    };
    
    const getGraficoColunaResults = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {

        })
    }

    return(
        <>
        <div className="card-grafico card d-flex justify-content-center align-items-center grafico-container">
            <span className="texto-grafico">Gráfico por Região</span>
            <div className="grafico-coluna">
                <Chart className="estilo-grafico" type="bar" data={multiAxisData} options={options}/>
            </div>
        </div>
        </>
    )
}

export default GraficoColuna;
