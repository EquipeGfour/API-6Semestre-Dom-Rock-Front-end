import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import { DataTableScrollDemo } from "../../components/resultado-processamento/resultado-processamento";

import { FileUploadDemo } from "../../components/upload/upload";
import ProgressoBarra from "../../components/progress-bar/progressBar";


const Processamento = () => {

    return (
        <>

        <SidebarMenu></SidebarMenu>
        <Navbar
                title={"Processamento"}>
        </Navbar>
        <div className="divisona">
            <FileUploadDemo/>
            <ProgressoBarra/>
            <DataTableScrollDemo/>
        </div>
        </>
    )
}

export default Processamento;