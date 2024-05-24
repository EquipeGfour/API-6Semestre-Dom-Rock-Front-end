import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart } from 'primereact/chart';
import "./grafico-coluna.css";

const GraficoColuna = () => {
    const [graficoColuna, setGraficoColuna] = useState([]);
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        const getGraficoColunaResults = async () => {
            try {
                const response = await axios.get('http://localhost:8000/review/get_states_and_reviews');
                console.log(response.data);
                const data = response.data;
                const tempGraficoColuna = [];
                const tempEstados = [];
                
                data.forEach(element => {
                    tempGraficoColuna.push(element.total_reviews);
                    tempEstados.push(element.state);
                });                
                setGraficoColuna(tempGraficoColuna);
                setEstados(tempEstados);
            } catch (error) {
                console.log(error);
                setGraficoColuna([]);
                setEstados([]);
            }
        };
        getGraficoColunaResults();
    }, []);

    const multiAxisData = {
        labels: estados,
        datasets: [{
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#FFEF75',
                '#66BB6A',
            ],
            yAxisID: 'y',
            data: graficoColuna
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'bottom'
            }
        },
    };

    return(
        <div className="card-grafico card d-flex justify-content-center align-items-center grafico-container">
            <span className="texto-grafico">Gráfico - Avaliações por Estados</span>
            <div className="grafico-coluna">
                <Chart className="estilo-grafico" type="bar" data={multiAxisData} options={options}/>
            </div>
        </div>
    );
};

export default GraficoColuna;
