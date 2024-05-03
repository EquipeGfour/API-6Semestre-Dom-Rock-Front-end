import { useContext } from "react";
import { Contexto } from "../contexts/context";

function useDocs() {
    const context = useContext(Contexto);
    return context;
}

function usePreprocessInfo() {
    const context = useContext(Contexto);
    return context;
}

function useReviewsInfo(){
    const context = useContext(Contexto);
    return context;
}

export  {useDocs, usePreprocessInfo, useReviewsInfo};