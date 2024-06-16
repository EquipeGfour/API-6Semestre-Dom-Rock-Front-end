import React from "react";
import './Usuario.css'
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import EditarUsuario from "../../components/editar-usuario/editar-usuario";


const CadastrarUsuario = () => {

    return (
        <>
            <SidebarMenu></SidebarMenu>
            <Navbar
                title={"Editar Usuário"}>
            </Navbar>
                <div className="card-cadastro-usuario ">
                    <h2>Editar Usuario</h2>
                    <div className=" card-scren-cad-usu">
                        <EditarUsuario/>
                    </div>
                </div>
        </>
    )
}

export default CadastrarUsuario;