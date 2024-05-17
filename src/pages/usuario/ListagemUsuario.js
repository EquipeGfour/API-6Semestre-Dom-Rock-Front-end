import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { ListaUsuario } from "../../components/listagem-usuario/listagem-usuario";


const ListagemUsuario = () => {

    return (
        <>
        <SidebarMenu></SidebarMenu>
        <Navbar
            title={"Listagem de Usuários"}>
        </Navbar>
        <ListaUsuario/>
        </>
    )
}

export default ListagemUsuario;