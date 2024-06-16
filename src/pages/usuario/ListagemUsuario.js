import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { ListaUsuario } from "../../components/listagem-usuario/listagem-usuario";
import './Usuario.css';

const ListagemUsuario = () => {

    return (
        <>
        <SidebarMenu></SidebarMenu>
        <Navbar
            title={"Listagem de Usuários"}>
        </Navbar>
        <div className="card-lista-usuario">
            <ListaUsuario/>
        </div>
        </>
    )
}

export default ListagemUsuario;