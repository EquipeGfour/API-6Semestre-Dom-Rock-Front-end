import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart } from 'primereact/chart';
import "./grafico-recomendacoes.css";
import { useReviewsInfo } from '../../hooks/hooks';

const GraficoRecomendacoes = () => {
    const { reviewsInfo } = useReviewsInfo();
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    "#BADA55",
                    "#D9D9D9",
                    "#FFFFF",
                ],
                hoverBackgroundColor: [
                    "#BADA55",
                    "#D9D9D9",
                    "#FFFFF",

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

    useEffect(() => {
        if (reviewsInfo && reviewsInfo.reviews_types) {
            const labels = Object.keys(reviewsInfo.reviews_types);
            const data = Object.values(reviewsInfo.reviews_types);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: [
                            "#BADA55",
                            "#DC3146",
                            "#D9D9D9",
                        ],
                        hoverBackgroundColor: [
                            "#BADA55",
                            "#DC3146",
                            "#D9D9D9",
                        ]
                    }]
            });
        }
    }, [reviewsInfo]);

    return (
        <div className="card-recomendacoes card d-flex justify-content-center align-items-center grafico-container">
            <span className="texto-recomendacoes">Análise de Reviews</span>
            <div className="grafico">
                <Chart type="doughnut" data={chartData} options={lightOptions} style={{ width: '60%', height: '100%' }} />
            </div>
        </div>
    );
}

export default GraficoRecomendacoes;
