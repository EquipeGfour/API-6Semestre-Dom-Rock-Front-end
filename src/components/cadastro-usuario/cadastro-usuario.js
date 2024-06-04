import React from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './cadastro-usuario.css'
import { Password } from 'primereact/password';


const CadastroUsuario = () =>{
    return (
        <>
            <div className="input-usuario">
                <div className="input-row">
                    <div className="input-column">
                        <h5>Nome</h5>
                        <InputText className="large-input-nome"/>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-column">
                        <h5>E-mail</h5>
                        <InputText className="large-input-email" />
                    </div>

                    <div className="input-column">
                        <h5>Senha</h5>
                            <InputText type="password" className="large-input-pass"  />
                    </div>
                </div>
            </div>
            <Button label='Salvar' className="botao-cad-add" onClick={('')} />

        </>
    )
}

export default CadastroUsuario;
