import { createContext, useEffect, useState } from "react";


const Contexto = createContext({});

const Provider = ({ children }) => {
    const [docid, setDocid] = useState({});
    const [preprocessinfo, setPreprocessinfo] = useState([]);   
    const [reviewsInfo, setReviewsInfo] = useState({'num_of_reviews': 0, 'avg_rating': 0.0, 'reviews_types': {'Positivas': 0, 'Negativas': 0 , 'Neutras': 0}})

    return(
        <Contexto.Provider value={{docid, setDocid, preprocessinfo, setPreprocessinfo, reviewsInfo, setReviewsInfo}}>
            { children }
        </Contexto.Provider>
    )
}

export { Contexto, Provider };