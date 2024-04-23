import axios from "axios";
import React, { useState } from "react";
import { Chart } from 'primereact/chart';

import "./grafico-coluna.css";

const GraficoColuna = () => {

    const [multiAxisData] = useState({
        labels: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo', 'Parana'],
        datasets: [{
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#FFEF75',
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
            <span className="texto-grafico">Top 5 Estados - Número de Avaliações</span>
            <div className="grafico-coluna">
                <Chart className="estilo-grafico" type="bar" data={multiAxisData} options={options}/>
            </div>
        </div>
        </>
    )
}

export default GraficoColuna;
