import React, { Component, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './resultado-processamento.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { usePreprocessInfo, useDocs  } from '../../hooks/hooks';
import axios from "axios";


export const DataTableScrollDemo = () => {  
    const [loading, setLoading] = useState(false);
    const {docid, setDocid} = useDocs();
    const {preprocessinfo, setPreprocessinfo} = usePreprocessInfo([]);

    const getResults = () => {
        if (docid.endPipeline){
            axios.get(`http://localhost:8000/pre-processing/get?doc_id=${docid.id}`)
        .then(response=> {
            setPreprocessinfo(response.data);
        }).catch(error=> {
            console.log(error);
        })}            
    }

    useEffect(() => {
        getResults();
    },[docid])

    return (
        <div className="datatable-scroll-demo">
        <div className="card-table">
        <div className="title-process-processamento">
            <span >Resultado do Processamento</span>
        </div>
            <div className='fora'>
            <DataTable value={preprocessinfo} scrollable scrollHeight="350px" loading={loading}>
                <Column field="input" header="Entrada"></Column>
                <Column field="output" header="Saida"></Column>
                <Column field="step" header="Etapa"></Column>
                <Column field="processing_time" header="Tempo"></Column>
            </DataTable>
            </div>
        </div>
    </div>
    )
}
