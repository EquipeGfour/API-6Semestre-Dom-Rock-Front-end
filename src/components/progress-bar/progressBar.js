import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import useDocs from "../../hooks/hooks";
import axios from "axios";

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                    
import "./progressBar.css";

const ProgressoBarra = () => {
    const [loading1, setLoading1] = useState(false);
    const [value1, setValue1] = useState(0);
    const {docid, setDocid} = useDocs({});
    const toast = useRef(null);
    const interval = useRef(null);

    const iniciarPipeline = () => {
        onLoadingClick1()
        axios.post(`http://localhost:8001/preprocessing/start?doc_id=${docid.id}`)
        .then(response=> {
            setDocid({});
        }).catch(error=> {
            console.log(error);
        })            
    }

    const onLoadingClick1 = () => {
        setLoading1(true);
        setValue1(0);

        interval.current = setInterval(() => {
            setValue1(prevValue => {
                const newValue = prevValue + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    clearInterval(interval.current);
                    setLoading1(false);
                    setValue1(100);
                    toast.current.show({ severity: 'info', summary: 'Sucesso', detail: 'Processamento concluído' });
                }
                return newValue;
            });
        }, 1000);
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card-progress">
                <div className="title-process">
                    <span >Progresso do Processamento</span>
                </div>            
                <ProgressBar value={value1} />
                <Button className="btnIniciar" label="Iniciar" loading={loading1} onClick={iniciarPipeline} />
            </div>
        </>
    );
};

export default ProgressoBarra;
