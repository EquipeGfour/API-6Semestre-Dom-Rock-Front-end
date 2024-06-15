import React, { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import './editar-usuario.css';

const EditarUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSalvar = () => {
        axios.post('')
            .then(response => {
                console.log('Usuário atualizado com sucesso!');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    return (
        <>
            <div className="input-usuario editar-usuario">
                <div className="input-row">
                    <div className="input-column">
                        <h5>Nome</h5>
                        <InputText className="large-input large-input-nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-column">
                        <h5>E-mail</h5>
                        <InputText className="large-input large-input-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-column">
                        <h5 className="senha-input">Senha</h5>
                        <InputText type="password" className="large-input large-input-pass" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                </div>
            </div>
            <Button label='Salvar' className="botao-editar-add" onClick={handleSalvar} />
        </>
    )
}

export default EditarUsuario;
