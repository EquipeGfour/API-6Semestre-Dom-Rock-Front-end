import axios from 'axios';
import React, { useState } from 'react';
import"./card-avaliacao.css";

const CardAvaliacao = () => {
    const {quantidade, setQuantidade} = useState()
    
    const getAvaliacoes = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {

        })
    }

    return (
        <>
            <div className='card-avaliacao'>
                <span className='texto-quantidade'>{'16387'}</span>
                <span className='texto-avaliacoes'>Avaliações</span>
            </div>
        </>
    )

}

export default CardAvaliacao;

