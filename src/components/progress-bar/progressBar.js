import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons      
import "./progressBar.css";
const ProgressoBarra = () => {
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    useEffect(() => {
        let val = value1;
        interval.current = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;
            if (val >= 100) {
                val = 100;
                toast.current.show({ severity: 'info', summary: 'Successo', detail: 'Processamento Concluído' });
                clearInterval(interval.current);
            }

            setValue1(val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <SidebarMenu></SidebarMenu>
            <Navbar title={"ProgressBar"}></Navbar>
            <Toast ref={toast}></Toast>
            <div className="card">
                <span className="title-process">Progresso</span>
                <ProgressBar value={value1}></ProgressBar>
            </div>

        </>
    );
};

export default ProgressoBarra;
