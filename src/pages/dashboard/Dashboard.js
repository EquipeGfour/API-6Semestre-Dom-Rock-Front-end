import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./Dashboard.css";
import CardAvaliacao from "../../components/card-avaliacao/card-avaliacao";
import CardRatings from "../../components/card-ratings/card-ratings";

const Dashboard = () => {

    return (
        <>  
            <SidebarMenu></SidebarMenu>
            <Navbar
                title={"Dashboard"}>
            </Navbar>
            <div className="dashboard-container">
                <div className="filtros">
                    <div className="card-availacoes">
                        <CardAvaliacao></CardAvaliacao>
                    </div>
                    <div className="card-ratings">
                        <CardRatings></CardRatings>
                    </div>
                    <div className="card-grafico"></div>
                </div>
                <div className="card-recomendacoes">
                    
                </div>
                <div className="card-sumarização"></div>
            </div>
        </>
    )
}

export default Dashboard;