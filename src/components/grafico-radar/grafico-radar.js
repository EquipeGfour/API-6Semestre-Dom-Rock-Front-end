import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart } from 'primereact/chart';
import "./grafico-radar.css";


// A={"Masculino":[65, 59, 90, 81,],
//     "Feminino":[28, 48, 40, 19,]}

const GraficoRadar = () => {
    const [chartData] = useState({
        labels: ['15-30 anos', '31-45 anos', '46-60 anos', '+60 anos '],
        datasets: [
            {
                label: 'Masculino',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81,]
            },
            {
                label: 'Feminino',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19,]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        }
    });
    
    return(
        <div className="card-grafico-radar card d-flex justify-content-center align-items-center grafico-container">
            <span className="texto-grafico-radar">Radar das Avaliações</span>
            <div className=" grafico-radar card flex justify-content-center">
                <Chart type="radar" className="estilo-grafico-radar" data={chartData} options={lightOptions}  />
            </div>
        </div>
    )
};

export default GraficoRadar;