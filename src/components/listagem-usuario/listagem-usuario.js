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
        setUsuarios([
            { id: 1, nome: 'João', email: 'joao@example.com', perfil: 'Administrador' },
            { id: 2, nome: 'Maria', email: 'maria@example.com', perfil: 'Usuário' },
            { id: 3, nome: 'José', email: 'jose@example.com', perfil: 'Usuário' },
            { id: 4, nome: 'Ana', email: 'ana@example.com', perfil: 'Usuário' }
        ]);
    }, []);

    const editarUsuario = (usuarioId) => {
        // Implemente a lógica de edição aqui
    };

    const excluirUsuario = async (usuarioId) => {
        try {
            // Simulação de exclusão, remove o usuário da lista
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
        <div className="datatable-scroll-demo">
            <div className='fora-usuario'>
                <DataTable value={usuarios} scrollable scrollHeight="350px">
                    <Column field="nome" header="Nome"></Column>
                    <Column field="email" header="E-mail"></Column>
                    <Column field="perfil" header="Perfil"></Column>
                    <Column body={acoesBodyTemplate} header="Ações"></Column>
                </DataTable>
            </div>
        </div>
    );
};
