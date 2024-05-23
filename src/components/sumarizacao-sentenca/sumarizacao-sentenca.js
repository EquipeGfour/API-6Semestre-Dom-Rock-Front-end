import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';
import './sumarizacao-sentenca.css';
import { ScrollPanel } from 'primereact/scrollpanel';
import { useSumarizacaoReviews } from '../../hooks/hooks';

const SumaricacaoSentenca = () => {
    const { sumarizacaoReviews, setSumarizacaoReviews } = useSumarizacaoReviews();

    const cardTemplate = (card) => {
        return (
            <div>
                <Card className='cardFora' title={''}>
                    <ScrollPanel >
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

    return (
        <div>
            <Carousel value={sumarizacaoReviews} itemTemplate={cardTemplate} numScroll={3} numVisible={5} responsiveOptions={responsiveSettings} />
        </div>
    );
};

export default SumaricacaoSentenca;




