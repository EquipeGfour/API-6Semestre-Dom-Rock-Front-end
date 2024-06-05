import axios from "axios";
import React, { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import "./search-bar.css";

const SearchBar = () => {
    const [value4, setValue4] = useState('');

    return(
        <div className="search-bar">
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={value4} placeholder="Busque um termo" onChange={(e) => setValue4(e.target.value)} />
                </span>
        </div>
    )

}

export default SearchBar;