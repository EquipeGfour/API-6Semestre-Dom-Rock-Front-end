import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart } from 'primereact/chart';
import "./grafico-radar.css";
import { useSumarizacaoProd, useSumarizacaoReviews, useReviewsInfo } from '../../hooks/hooks';

const GraficoRadar = () => {
    const [produtoMasculino, setReviewsMasculino] = useState([]);
    const [produtoFeminino, setReviewsFeminino] = useState([]);
    const { sumarizacaoProd } = useSumarizacaoProd();
    const { reviewsInfo } = useReviewsInfo();

    const getGraficoRadarResults = async () => {
        if (reviewsInfo && 'id' in sumarizacaoProd) {
            try {
                const response = await axios.get(`http://localhost:8001/products/genres?product_id=${sumarizacaoProd.id}`);
                console.log(response.data);
                if (response.data.Masculino.length > 0) {
                    setReviewsMasculino(response.data.Masculino);
                } else {
                    setReviewsMasculino([]);
                }
                if (response.data.Feminino.length > 0) {
                    setReviewsFeminino(response.data.Feminino);
                } else {
                    setReviewsFeminino([]);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const chartData = {
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
                data: produtoMasculino
            },
            {
                label: 'Feminino',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: produtoFeminino
            }
        ]
    };

    const lightOptions = {
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
    };

    useEffect(() => {
        getGraficoRadarResults();
    }, [reviewsInfo, sumarizacaoProd]);

    return (
        <div className="card-grafico-radar card d-flex justify-content-center align-items-center grafico-container">
            <span className="texto-grafico-radar">Gráfico - Gênero x Idade</span>
            <div className="grafico-radar card flex justify-content-center">
                <Chart type="radar" className="estilo-grafico-radar" data={chartData} options={lightOptions} />
            </div>
        </div>
    );
};

export default GraficoRadar;
