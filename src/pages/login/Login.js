import React, { useState,useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import LogoLogin from "../../img/logo_login.png"
import "./Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const toast = useRef(null);
    const loginButtonRef = useRef(null);


    const realizarLogin = ({navigation}) =>{
        if(email === '' || senha === ''){
            toast.current.show({severity:'error', detail: 'Erro ao realizar login', sumary:"erro" , life: 3000 })
            return
        }
        axios.post('http://localhost:8000/users/login',{
            email: email,
            senha: senha
        }).then(res => {
            setEmail("");
            setSenha("");
            toast.current.show({severity:'success', detail: 'Login realizado com sucesso', sumary:"success" , life: 3000 })
            navigate('/dashboard')
        }). catch(error => {
            console.error('Erro ao fazer login.', error)
            toast.current.show({severity:'error', detail: 'Erro ao realizar login', sumary:"erro" , life: 3000 })
        })
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            realizarLogin();
        }
    }

    const preencherLogin = () => {
        setEmail('natalirabessa@gmail.com');
        setSenha('abcd0102');
    }

    return (
        <>
            <Toast ref={toast} />
            <div className="container">
                <div className="card-login">
                    <div className="card-logo">
                        <img className="logo-login" src={LogoLogin} onClick={preencherLogin}></img>
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
                            <Button onClick={realizarLogin} className='btn-login' label="Entrar" aria-label="Submit"/>                                                   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;