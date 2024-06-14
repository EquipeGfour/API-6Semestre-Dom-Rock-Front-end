import React, { useState, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useDocs } from "../../hooks/hooks";
import axios from "axios";

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                    
import "./progressBar.css";

const ProgressoBarra = () => {
    const [loading1, setLoading1] = useState(false);
    const [progressoTexto, setProgressoTexto] = useState('Status: Aguardando');
    const { docid, setDocid } = useDocs();
    const toast = useRef(null);
    const [progressValue, setProgressValue] = useState(0); // Estado para controlar o valor da barra de progresso

    const iniciarPipeline = () => {
        setLoading1(true);
        setProgressoTexto('Status: Em Processamento...'); // Alterar texto para "Em Processamento..."
        setProgressValue(0); // Inicializar a barra de progresso com valor 0

        axios.post(`http://localhost:8001/preprocessing/start?dataset_id=${docid.id}`)
            .then(response => {
                if (response.status === 200) {
                    setLoading1(false);
                    setProgressoTexto('Status: Processamento finalizado !'); // Alterar texto para "Processamento finalizado !"
                    setProgressValue(100); // Definir a barra de progresso como completa (100%)
                    docid.endPipeline = true;
                    setDocid(prevValue => ({ ...prevValue, ...docid }));

                    // Exibir toast de sucesso
                    toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Dataset processado com sucesso!' });
                }
            }).catch(error => {
                console.log(error);
                setLoading1(false); // Resetar estado de loading em caso de erro
                setProgressoTexto('Status: Aguardando'); // Resetar texto em caso de erro
                setProgressValue(0); // Resetar o valor da barra de progresso em caso de erro
            });
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card-progress">
                <div className="title-process">
                    <span>{progressoTexto}</span>
                </div>            
                <ProgressBar mode={loading1 ? 'indeterminate' : 'determinate'} value={progressValue} displayValue={false} showValue={false}/>
                <Button className="btnIniciar" label="Iniciar" disabled={loading1} onClick={iniciarPipeline} />
            </div>
        </>
    );
};

export default ProgressoBarra;
