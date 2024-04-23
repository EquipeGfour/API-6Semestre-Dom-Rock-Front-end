import axios from "axios";
import React, { useState } from "react";
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import "./seletores.css";
import { Button } from 'primereact/button';

const Seletores = () => {
    const [categorias,setCategorias] = useState([]);
    const [subCategorias,setSubCategorias] = useState([]);
    const [produtos,setProdutos] = useState([]);
    const [estados,setEstados] = useState([]);
    const [demografia,setDemografia] = useState([]);

    const getFiltros = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {

        })
    };


    return (
        <>
        <div className="seletores"> 
            <h5>Categoria</h5>           
            <Dropdown value={""} options={""} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Sub-Categoria</h5>           
            <Dropdown value={""} options={""} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Produto</h5>           
            <Dropdown value={""} options={""} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Estado</h5>           
            <Dropdown value={""} options={""} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Demografia</h5>           
            <Dropdown value={""} options={""} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
        <Button className="btn-seletores">Filtrar</Button>
        </>
    );
}

export default Seletores;
