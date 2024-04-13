import { createContext, useState } from "react";


const Contexto = createContext({});

const Provider = ({ children }) => {
    const [docid, setDocid] = useState({});
    return(
        <Contexto.Provider value={{docid, setDocid}}>
            { children }
        </Contexto.Provider>
    )
}

export { Contexto, Provider };