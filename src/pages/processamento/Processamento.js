import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { FileUploadDemo } from "../../components/upload/upload";


const Processamento = () => {

    return (
        <>
            <SidebarMenu></SidebarMenu>
            <Navbar
                    title={"Processamento"}>
            </Navbar>
            <FileUploadDemo/>
        </>
    )
}

export default Processamento;