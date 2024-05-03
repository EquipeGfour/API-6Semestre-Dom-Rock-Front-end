import React from "react";
import SidebarMenu from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./Dashboard.css";
import CardAvaliacao from "../../components/card-avaliacao/card-avaliacao";
import CardRatings from "../../components/card-ratings/card-ratings";
import GraficoRecomendacoes from "../../components/grafico-recomendacoes/grafico-recomendacoes";
import GraficoColuna from "../../components/grafico-coluna/grafico-coluna";
import Seletores from "../../components/seletores/seletores";

const Dashboard = () => {

    return (
        <>  
            <SidebarMenu></SidebarMenu>
            <Navbar
                title={"Dashboard"}>
            </Navbar>
            <div className="dashboard-container">
                <div className="filtros"> 
                    <Seletores/>
                </div>
                <div className="dashboard-screen">                               
                    <div className="card-availacoes">
                        <CardAvaliacao></CardAvaliacao>
                    </div>
                    <div className="card-ratings">
                        <CardRatings></CardRatings>
                    </div>
                    <GraficoColuna></GraficoColuna>
                </div>
                <GraficoRecomendacoes></GraficoRecomendacoes>
                {/* <div className="card-sumarização"></div> */}
            </div>
        </>
    )
}

export default Dashboard;