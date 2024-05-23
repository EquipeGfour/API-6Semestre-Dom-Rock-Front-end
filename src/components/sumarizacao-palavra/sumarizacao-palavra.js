import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import './sumarizacao-palavra.css';
import axios from 'axios';
import { useSumarizacaoProd, useSumarizacaoReviews, useReviewsInfo } from '../../hooks/hooks';

const SumaricacaoPalavra = () => {
    const [palavras, setPalavras] = useState([]);
    const { sumarizacaoProd, setSumarizacaoProd } = useSumarizacaoProd();
    const { sumarizacaoReviews, setSumarizacaoReviews } = useSumarizacaoReviews();
    const {reviewsInfo, setReviewsInfo} = useReviewsInfo();
    const [palavraSelecionada, setPalavraSelecionada] = useState('');
    const [sumarizacoes, setSumarizacoes] = useState([]);

    const getSumarizacao = () => {
        if(reviewsInfo && 'id' in sumarizacaoProd){
            axios.get(`http://localhost:8001/products/get_summary?product_id=${sumarizacaoProd.id}`)
            .then(response=> {
                const palavrasLimitadas =  getPalavrasFrequentes(response.data)
                const reviewsSumarizadas = getReviewsSumarizadas (response.data)
                setPalavras(palavrasLimitadas);
                setSumarizacoes(reviewsSumarizadas)
                setSumarizacaoReviews(reviewsSumarizadas);         
            })
            .catch(error => {
                console.error('Erro ao buscar as palavras:', error);
            });
        }
    }

    const getPalavrasFrequentes = (dados) => {
        const palavras = []
        if (dados.positive.reviews.length){
            dados.positive.words_frequency.forEach(word => {
                palavras.push({'palavra': word[0], 'frequencia': word[1] , 'sentimento': 'positive'});
                
            });
        }
        if (dados.neutral.reviews.length){
            dados.neutral.words_frequency.forEach(word => {
                palavras.push({'palavra': word[0], 'frequencia': word[1] , 'sentimento': 'neutral'});
            });
        }
        if (dados.negative.reviews.length){
            dados.negative.words_frequency.forEach(word => {
                palavras.push({'palavra': word[0], 'frequencia': word[1] , 'sentimento': 'negative'});
                
            });
        }
        return palavras.sort((a, b) => b.frequencia - a.frequencia).slice(0, 5);
    }

    const fitrarSumarizacaoPalavra = (palavra) => {
        const filtradas = sumarizacoes.filter((r) => 
            r.toLowerCase().includes(palavra.toLowerCase())
        );
        setSumarizacaoReviews(filtradas);
    }
    
    
    const getReviewsSumarizadas = (dados) =>{
        const sumarizacoes = []
        if (dados.positive.reviews.length){
            dados.positive.reviews.forEach(review => {
                sumarizacoes.push(review.doc);
                
            });
        }
        if (dados.neutral.reviews.length){
            dados.neutral.reviews.forEach(review => {
                sumarizacoes.push(review.doc);
            });
        }
        if (dados.negative.reviews.length){
            dados.negative.reviews.forEach(review => {
                sumarizacoes.push(review.doc);
            });
        }
        return sumarizacoes;
    }

    const verificarSentimento = (sentimento) => {
        if(sentimento == 'positive'){
            return 'p-button-success'
        }
        if(sentimento == 'negative'){
            return 'p-button-danger'
        }
        if(sentimento == 'neutral'){
            return 'p-button-info'
        }
    }

    useEffect(() => {
        getSumarizacao()
    }, [sumarizacaoProd, reviewsInfo]);

    return (
        <>
            <div className="container-palavras">
            <h2 className="titulo-sumarizacao">Sumarização</h2>
            <div className='fora-palavra'>
                {
                    palavras.map((p , i) => (
                        <Button key={i} label={p.palavra} className={verificarSentimento(p.sentimento)} onClick={()=> fitrarSumarizacaoPalavra(p.palavra)} />
                    ))
                }
    
            </div>
        </div>
        </>
    );
};

export default SumaricacaoPalavra;
