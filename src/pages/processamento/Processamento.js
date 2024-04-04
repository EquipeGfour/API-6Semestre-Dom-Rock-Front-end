import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { DataTableScrollDemo } from "../../components/resultado-processamento/resultado-processamento";

const Processamento = () => {

    return (
        <>
        <SidebarMenu></SidebarMenu>
        <Navbar
                title={"Processamento"}>
        </Navbar>
        <DataTableScrollDemo/>
        </>
    )
}

export default Processamento;