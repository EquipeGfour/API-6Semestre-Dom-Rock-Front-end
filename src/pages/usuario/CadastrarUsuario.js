import React from "react";
import CadastroUsuario from "../../components/cadastro-usuario/cadastro-usuario";
import './Usuario.css'
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";


const CadastrarUsuario = () => {

    return (
        <>
            <SidebarMenu></SidebarMenu>
            <Navbar
                title={"Cadastro de Usuários"}>
            </Navbar>
                <div className="card-cadastro-usuario ">
                    <h2>Cadastrar Usuario</h2>
                    <div className=" card-scren-cad-usu">
                        <CadastroUsuario/>
                    </div>
                </div>
        </>
    )
}

export default CadastrarUsuario;