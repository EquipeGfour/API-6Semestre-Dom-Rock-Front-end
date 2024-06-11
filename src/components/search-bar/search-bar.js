import axios from "axios";
import React, { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import "./search-bar.css";
import { useSumarizacaoReviews, useAllSumarizacoes } from '../../hooks/hooks';

const SearchBar = () => {
    const [palavra, setPalavra] = useState('');
    const { sumarizacaoReviews, setSumarizacaoReviews } = useSumarizacaoReviews();
    const {allSumarizacoes, setAllSumarizacoes} = useAllSumarizacoes();

    const getPalavrasFrequentes = (word) => {
        setPalavra(word);     
            const review_filtrada = allSumarizacoes.filter((r) => 
                r.toLowerCase().includes(word.toLowerCase())
            );
            setSumarizacaoReviews(review_filtrada);
            console.log(review_filtrada);
        
    }

    return(
        <div className="search-bar">
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={palavra} placeholder="Busque um termo" onChange={(e) => getPalavrasFrequentes(e.target.value)} />
                </span>
        </div>
    )

}

export default SearchBar;