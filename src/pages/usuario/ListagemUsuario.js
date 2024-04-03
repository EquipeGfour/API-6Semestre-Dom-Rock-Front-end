import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const ListagemUsuario = () => {

    return (
        <>
        <SidebarMenu></SidebarMenu>
        <Navbar
            title={"Listagem de Usuários"}>
        </Navbar>
        </>
    )
}

export default ListagemUsuario;