import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons      
import "./progressBar.css";

const ProgressoBarra = () => {
    const [loading1, setLoading1] = useState(false);
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

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
            <SidebarMenu />
            <Navbar title={"ProgressBar"} />
            <Toast ref={toast} />
            <div className="card">
                <div className="title-process">
                    <span >Progresso do Processamento</span>
                </div>
                
                
                <ProgressBar value={value1} />
                <Button className="btnIniciar" label="Iniciar" loading={loading1} onClick={onLoadingClick1} />
            </div>
        </>
    );
};

export default ProgressoBarra;
