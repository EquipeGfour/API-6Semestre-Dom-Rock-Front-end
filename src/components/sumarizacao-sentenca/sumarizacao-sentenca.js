import React from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';
import './sumarizacao-sentenca.css';
import { ScrollPanel } from 'primereact/scrollpanel';
import { useSumarizacaoReviews } from '../../hooks/hooks';
import { Button } from 'primereact/button';

const SumaricacaoSentenca = () => {
    const { sumarizacaoReviews, setSumarizacaoReviews } = useSumarizacaoReviews();

    const cardTemplate = (card) => {
        return (
            <div>
                <Card className='cardFora' title={''}>
                    <ScrollPanel>
                        <p className='m-0'>{card}</p>
                    </ScrollPanel>
                </Card>
            </div>
        );
    };

    const responsiveSettings = [
        { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
        { breakpoint: '600px', numVisible: 2, numScroll: 2 },
        { breakpoint: '480px', numVisible: 1, numScroll: 1 }
    ];

    const shouldRenderCarousel = sumarizacaoReviews.length > 2;

    return (
        <>
            {shouldRenderCarousel ? (
                <Carousel value={sumarizacaoReviews} itemTemplate={cardTemplate} numScroll={3} numVisible={4} responsiveOptions={responsiveSettings} />
            ) : (
                sumarizacaoReviews.map((review, index) => (
                    <div key={index} className="single-card">
                        {cardTemplate(review)}
                    </div>
                ))
            )}
        </>
    );
};

export default SumaricacaoSentenca;
