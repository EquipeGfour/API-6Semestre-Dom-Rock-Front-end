import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './listagem-usuario.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import axios from "axios";

export const ListaUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users/all');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const editarUsuario = (usuarioId) => {
    };

    const excluirUsuario = async (usuarioId) => {
        try {
            setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };

    const acoesBodyTemplate = (rowData) => {
        return (
            <div className='botao-usuario'>
                <Button icon="pi pi-pencil" className="botao-editar" onClick={() => editarUsuario(rowData.id)} />
                <Button icon="pi pi-trash" className="botao-excluir" onClick={() => excluirUsuario(rowData.id)} />
            </div>
        );
    };

    return (
        <>
            <div className=' fora-usuario datatable-scroll-demo'>
                <DataTable value={usuarios} scrollable scrollHeight="350px">
                    <Column field="name" header="Nome"></Column>
                    <Column field="email" header="E-mail"></Column>
                    <Column body={acoesBodyTemplate} header="Ações"></Column>
                </DataTable>
            </div>
            <Button label='Novo Usuario' className="botao-add" onClick={('')} />
            
        </>
    );
};
