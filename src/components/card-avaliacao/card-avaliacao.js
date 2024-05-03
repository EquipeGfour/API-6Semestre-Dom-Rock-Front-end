import axios from 'axios';
import React, { useState } from 'react';
import"./card-avaliacao.css";
import { useReviewsInfo } from '../../hooks/hooks';

const CardAvaliacao = () => {
    const {reviewsInfo, setReviewsInfo} = useReviewsInfo();

    
    const getAvaliacoes = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {

        })
    }

    return (
        <>
            <div className='card-avaliacao'>
                <span className='texto-quantidade'>{reviewsInfo.num_of_reviews}</span>
                <span className='texto-avaliacoes'>Avaliações</span>
            </div>
        </>
    )

}

export default CardAvaliacao;

