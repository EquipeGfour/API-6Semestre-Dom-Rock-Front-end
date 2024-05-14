import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';
import './sumarizacao-sentenca.css';
import { ScrollPanel } from 'primereact/scrollpanel';

const SumaricacaoSentenca = () => {

    const [cards, setCards] = useState([
        { title: "Card Mockado 100", content: " Num mundo em constante transformação, é essencial cultivar a compaixão, a empatia e a gratidão, pois são essas virtudes que nos conectam uns aos outros, nos fortalecem em tempos difíceis e nos permitem construir um futuro mais harmonioso e sustentável para todos. Num mundo em constante transformação, é essencial cultivar a compaixão, a empatia e a gratidão, pois são essas virtudes que nos conectam uns aos outros, nos fortalecem em tempos difíceis e nos permitem construir um futuro mais harmonioso e sustentável para todos." },
        { title: "Card Mockado 100", content: "A verdadeira felicidade vem da realização pessoal, do crescimento constante e do amor compartilhado."},
        { title: "Card Mockado 200", content: "Em um mundo repleto de desafios, é fundamental manter a esperança, a resiliência e a determinação para alcançar nossos objetivos e construir um futuro melhor para todos." },
        { title: "Card Mockado 300", content: "A jornada da vida nos leva por caminhos inesperados, repletos de altos e baixos, mas é nossa capacidade de aprender, crescer e encontrar alegria nas pequenas coisas que nos mantém resilientes e nos permite encontrar significado em cada momento." },
        { title: "Card Mockado 400", content: "Nos momentos de adversidade, encontramos oportunidades para crescer, para nos reinventar e para descobrir a força interior que nos impulsiona a superar desafios e a alcançar novos patamares de sucesso e realização." },

    ])
    useEffect(() => {
        axios.get('')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os cards:', error);
            });
    }, []);

    const cardTemplate = (card) => {
        return (
            <div>
                <Card className='cardFora' title={''}>
                    <ScrollPanel >
                        <p className='m-0'>{card.content}</p>
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
            <Carousel value={cards} itemTemplate={cardTemplate} numScroll={3} numVisible={3} responsiveOptions={responsiveSettings} />
        </div>
    );
};

export default SumaricacaoSentenca;




