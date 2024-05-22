import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import './sumarizacao-palavra.css';
import axios from 'axios';

const SumaricacaoPalavra = () => {
    const [palavras, setPalavras] = useState([]);

    useEffect(() => {
        axios.get('http://demo9951387.mockable.io/palavras')
            .then(response => {
                const dados = response.data.map(item => item.word);
                //Limite de palavras se tiver
                const palavrasLimitadas = dados.slice(0, 5);
                setPalavras(palavrasLimitadas);
            })
            .catch(error => {
                console.error('Erro ao buscar as palavras:', error);
            });
    }, []);

    return (
        <>
            <div className="container-palavras">
            <h2 className="titulo-sumarizacao">Sumarização</h2>
            <div className='fora-palavra'>
                <Button label={palavras[0]} className="p-button-success" />
                <Button label={palavras[1]} className="p-button-success" />
                <Button label={palavras[2]} className="p-button-info" />
                <Button label={palavras[3]} className="p-button-danger" />
                <Button label={palavras[4]} className="p-button-danger" />
            </div>
        </div>
        </>
    );
};

export default SumaricacaoPalavra;
