import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './listagem-usuario.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import axios from "axios";

export const ListaUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [editandoUsuario, setEditandoUsuario] = useState(null); // Estado para controlar edição
    const [usuarioEditado, setUsuarioEditado] = useState({}); // Estado para armazenar usuário editado temporariamente
    const navigate = useNavigate();

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
        setEditandoUsuario(usuarioId); // Define o usuário que está sendo editado
        const usuarioParaEditar = usuarios.find(usuario => usuario.id === usuarioId);
        setUsuarioEditado({ ...usuarioParaEditar }); // Carrega os dados do usuário para o estado de edição
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuarioEditado({ ...usuarioEditado, [name]: value });
    };

    const salvarUsuario = async () => {
        try {
            await axios.put(`http://localhost:8000/users/put?user_id=${usuarioEditado.id}`, usuarioEditado);
            // Atualiza o estado local após a edição
            const novosUsuarios = usuarios.map(u => u.id === usuarioEditado.id ? usuarioEditado : u);
            setUsuarios(novosUsuarios);
            setEditandoUsuario(null); // Limpa o estado de edição
            setUsuarioEditado({}); // Limpa o estado de usuário editado
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
        }
    };

    const excluirUsuario = async (usuarioId) => {
        try {
            await axios.delete(`http://localhost:8000/users/delete`, {
                params: { user_id: usuarioId }
            });
            setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };

    const acoesBodyTemplate = (rowData) => {
        if (editandoUsuario === rowData.id) {
            return (
                <div className='botao-usuario'>
                    <Button icon="pi pi-check" className="botao-salvar" onClick={() => salvarUsuario()} />
                </div>
            );
        } else {
            return (
                <div className='botao-usuario'>
                    <Button icon="pi pi-pencil" className="botao-editar" onClick={() => editarUsuario(rowData.id)} />
                    <Button icon="pi pi-trash" className="botao-excluir" onClick={() => excluirUsuario(rowData.id)} />
                </div>
            );
        }
    };

    return (
        <>
            <div className='fora-usuario datatable-scroll-demo'>
                <DataTable value={usuarios} scrollable scrollHeight="350px">
                    <Column field="name" header="Nome" body={(rowData) => (
                        editandoUsuario === rowData.id ?
                            <InputText name="name" value={usuarioEditado.name} onChange={handleInputChange} />
                            : <span>{rowData.name}</span>
                    )}></Column>
                    <Column field="email" header="E-mail" body={(rowData) => (
                        editandoUsuario === rowData.id ?
                            <InputText name="email" value={usuarioEditado.email} onChange={handleInputChange} />
                            : <span>{rowData.email}</span>
                    )}></Column>
                    <Column body={acoesBodyTemplate} header="Ações"></Column>
                </DataTable>
            </div>
            <Button label='Novo Usuário' className="botao-add" onClick={() => navigate('/cadastro-usuario')} />
        </>
    );
};
