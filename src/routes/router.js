import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ListagemUsuario from "../pages/usuario/ListagemUsuario";
import CadastrarUsuario from "../pages/usuario/CadastrarUsuario";
import EditarUsuario from "../pages/usuario/EditarUsuario";
import Processamento from "../pages/processamento/Processamento";
import Navbar from "../components/navbar/navbar";
import SidebarMenu from "../components/sidebar/sidebar";
import { DataTableScrollDemo } from "../components/resultado-processamento/resultado-processamento";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="sidebar" element={<SidebarMenu></SidebarMenu>}></Route>
            <Route path="navbar" element={<Navbar></Navbar>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="listagem-usuarios" element={<ListagemUsuario></ListagemUsuario>}></Route>
            <Route path="cadastro-usuario" element={<CadastrarUsuario></CadastrarUsuario>}></Route>
            <Route path="editar-usuario" element={<EditarUsuario></EditarUsuario>}></Route>
            <Route path="processamento" element={<Processamento></Processamento>}></Route>

            
            <Route path="resultado-processamento" element={<DataTableScrollDemo></DataTableScrollDemo>}></Route>
        </Routes>
    )
}