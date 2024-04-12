import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import LogoLogin from "../../img/logo_login.png"
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <>
            <div className="container">
                <div className="card-login">
                    <div className="card-logo">
                        <img className="logo-login" src={LogoLogin}></img>
                        <div className="logo-text"> 
                            <p>Esta é uma área restrita para usuários cadastrados.</p>
                            <p>Informe seu usuário e senha para obter acesso ao sistema</p>
                        </div>                        
                    </div>
                    <div className="card-form">
                        <div className="inner-card">
                            <h1 style={{color: '#292D32', marginTop: '20px'}}>Login</h1>
                            <InputText className='espacamento-input1' value={email} placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
                            <InputText className='espacamento-input2' type="password" value={senha} placeholder='Senha' onChange={(e) => setSenha(e.target.value)} />
                            <Button onClick={() => window.location.href = '/dashboard'} className='btn-login' label="Entrar" aria-label="Submit"/>                                                   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;