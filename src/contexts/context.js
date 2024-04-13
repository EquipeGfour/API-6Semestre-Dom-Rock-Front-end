import { createContext, useEffect, useState } from "react";


const Contexto = createContext({});

const Provider = ({ children }) => {
    const [docid, setDocid] = useState({});
    const [preprocessinfo, setPreprocessinfo] = useState([]);   

    return(
        <Contexto.Provider value={{docid, setDocid, preprocessinfo, setPreprocessinfo}}>
            { children }
        </Contexto.Provider>
    )
}

export { Contexto, Provider };