import axios from "axios";
import React, { useState, useEffect, useRef  } from "react";
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import "./seletores.css";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useReviewsInfo } from "../../hooks/hooks";

const Seletores = () => {
    const [categorias, setCategorias] = useState([]);
    const [subCategorias, setSubCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [estados, setEstados] = useState([{ sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }]);
    const [demografia, setDemografia] = useState([]);
    const {reviewsInfo, setReviewsInfo} = useReviewsInfo();

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const [subCategoriaSelecionada, setSubCategoriaSelecionada] = useState(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [estadoSelecionado, setEstadoSelecionado] = useState(null);

    const toast = useRef(null);

    const filtrar = () =>{
        if(estadoSelecionado){
            filtrarPorEstado();
            return;
        }
        if (produtoSelecionado){
            filtrarPorProduto()
            return;
        }else{
            toast.current.show({severity:'error', detail: 'Selecione um produto ou um estado', sumary:"erro" , life: 3000 })
        }
    }
    

    const filtrarPorEstado = () =>{
        axios.get(`http://localhost:8000/review/get-all-reviews-state?state=${estadoSelecionado.sigla}`)
            .then (response => {
                console.log(response.data);
                setReviewsInfo(response.data)
            }).catch(error => {
                console.error ('Erro ao buscar os produtos')
            })
    }

    const filtrarPorProduto = () =>{
        axios.get(`http://localhost:8000/review/all-by-product?product_id=${produtoSelecionado.product_id}`)
            .then (response => {
                setReviewsInfo(response.data)
            }).catch(error => {
                console.error ('Erro ao buscar os produtos')
            }) 
    }

    const getAllProductsByCategory = () => {
        axios.get(`http://localhost:8000/products/all-by-category?id_category=${categoriaSelecionada}`)
            .then (response => {
                setProdutos(response.data)
            }).catch(error => {
                console.error ('Erro ao buscar os produtos')
            })
    }
    const getAllProductsBySubCategory = () => {
        axios.get(`http://localhost:8000/products/all-by-subcategory?id_subcategory=${subCategoriaSelecionada}`)
            .then (response => {
                setProdutos(response.data)
            }).catch(error => {
                console.error ('Erro ao buscar os produtos')
            })
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/category/all')
            .then(response => {
                setCategorias(response.data);
            }).catch(error => {
                console.error('Erro ao buscar categorias:', error);
            });
    }, []);

    useEffect(() => {
        if (categoriaSelecionada) {
            axios.get(`http://localhost:8000/subcategory/all-by-category?id_category=${categoriaSelecionada}`)
                .then(response => {
                    setSubCategorias(response.data);
                }).catch(error => {
                    console.error('Erro ao buscar subcategorias:', error);
                });
        }
    }, [categoriaSelecionada]);

    useEffect(() => {
        if(categoriaSelecionada && subCategoriaSelecionada){
            console.log(subCategoriaSelecionada);

            getAllProductsBySubCategory();
        }
        if(categoriaSelecionada){
            getAllProductsByCategory();
        }

    },[categoriaSelecionada, subCategoriaSelecionada])

    useEffect(() => {
        if (subCategoriaSelecionada) {
            getAllProductsBySubCategory();
        }
    }, [subCategoriaSelecionada]);
    

    return (
        <>
            <Toast ref={toast} />
            <div className="seletores">
                <h5>Categoria</h5>
                <Dropdown value={categoriaSelecionada} options={categorias.map(cat => ({ label: cat.category, value: cat.id }))} onChange={(e) => setCategoriaSelecionada(e.value)} placeholder="Selecione" />
            </div>
            <div className="seletores">
                <h5>Sub-Categoria</h5>
                <Dropdown value={subCategoriaSelecionada} options={subCategorias.map(subcat => ({ label: subcat.subcategory, value: subcat.id }))} onChange={(e) => setSubCategoriaSelecionada(e.value)} placeholder="Selecione" />
            </div>
            <div className="seletores"> 
            <h5>Produto</h5>           
            <Dropdown value={produtoSelecionado} options={produtos.map(prod => ({label: prod.name, value:prod }))} onChange={(e) => setProdutoSelecionado(e.value)} placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Estado</h5>           
            <Dropdown value={estadoSelecionado} options={estados} onChange={(e) => setEstadoSelecionado(e.value)} optionLabel="nome" placeholder="Selecione" />
        </div>
        <div className="seletores"> 
            <h5>Demografia</h5>           
            <Dropdown value={demografia} options={demografia} onChange={""} optionLabel="name" placeholder="Selecione" />
        </div>
            <Button className="btn-seletores" onClick={filtrar}>Filtrar</Button>
        </>
    );
}

export default Seletores;
