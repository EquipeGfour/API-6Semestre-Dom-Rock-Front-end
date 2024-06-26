import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ListagemUsuario from "../pages/usuario/ListagemUsuario";
import CadastrarUsuario from "../pages/usuario/CadastrarUsuario";
import EditarUsuario from "../pages/usuario/EditarUsuario";
import Processamento from "../pages/processamento/Processamento";
import Navbar from "../components/navbar/navbar";
import SidebarMenu from "../components/sidebar/sidebar";
import ProgressBar from "../components/progress-bar/progressBar";

import {DataTableScrollDemo} from "../components/resultado-processamento/resultado-processamento";


import  FileUploadDemo  from "../components/upload/upload";
import SumaricacaoSentenca from "../components/sumarizacao-sentenca/sumarizacao-sentenca";
import SumaricacaoPalavra from "../components/sumarizacao-palavra/sumarizacao-palavra";


export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="sidebar" element={<SidebarMenu></SidebarMenu>}></Route>
            <Route path="navbar" element={<Navbar></Navbar>}></Route>
            <Route path="progress-bar" element={<ProgressBar></ProgressBar>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="listagem-usuarios" element={<ListagemUsuario></ListagemUsuario>}></Route>
            <Route path="cadastro-usuario" element={<CadastrarUsuario></CadastrarUsuario>}></Route>
            <Route path="editar-usuario" element={<EditarUsuario></EditarUsuario>}></Route>
            <Route path="processamento" element={<Processamento></Processamento>}></Route>
            
            
            
            
            
            
            <Route path="sumarizacao-sentenca" element={<SumaricacaoSentenca></SumaricacaoSentenca>}></Route>
            <Route path="sumarizacao-palavra" element={<SumaricacaoPalavra></SumaricacaoPalavra>}></Route>



            
            <Route path="resultado-processamento" element={<DataTableScrollDemo></DataTableScrollDemo>}></Route>
      

            
            <Route path="upload" element={<FileUploadDemo></FileUploadDemo>}></Route>

        </Routes>
    )
}