import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./Dashboard.css";

const Dashboard = () => {

    return (
        <>  
            <SidebarMenu></SidebarMenu>
            <Navbar
                title={"Dashboard"}>
            </Navbar>
            <div className="dashboard-container">
                <div className="filtros">
                    <div className="card-availacoes"></div>
                    <div className="card-recomendacoes"></div>
                    <div className="card-grafico"></div>
                </div>
                <div className="card-ratings"></div>
                <div className="card-sumarização"></div>
            </div>
        </>
    )
}

export default Dashboard;