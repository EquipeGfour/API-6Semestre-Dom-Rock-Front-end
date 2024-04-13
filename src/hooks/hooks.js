import { useContext } from "react";
import { Contexto } from "../contexts/context";

function useDocs() {
    const context = useContext(Contexto);
    return context;
}

export default useDocs;