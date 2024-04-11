import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../img/logo2.webp"

import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent,} from "react-pro-sidebar";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiOutlineTerminal } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";


import "./sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";

const SidebarMenu = () => {
    return (
    <>
    <div id="header">
        <ProSidebar>
            <SidebarHeader>
                <div className="logotext">
                    <img
                    src={Logo2}
                    alt=""
                    />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem className="dashboard" icon={<HiOutlineChartSquareBar />}>
                    <Link className="dashboard-text" to="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <MenuItem className="users" icon={<HiUsers />}>
                    <Link  className="users-text"to="/listagem-usuarios">Usuários</Link>
                    </MenuItem>
                    <MenuItem className="process" icon={<HiOutlineTerminal />}>
                    <Link className="process-text" to="/processamento">Processamento</Link>
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="square">
                    <MenuItem className="logout" icon={<HiLogout />}>Logout</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    </div>
    </>
    )
}

export default SidebarMenu;