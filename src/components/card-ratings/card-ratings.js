import axios from 'axios';
import React, { useState } from 'react';
import"./card-ratings.css";
import { Rating } from 'primereact/rating';

const CardRatings = () => {
    const {rating, setRating} = useState(3)

    const getRatings = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {
            
        })
    }

    return (
        <>
            <div>
                    <Rating className='rating' value={'2'} readOnly stars={5} cancel={false} />
                    <span className='texto-rating'>{'2.0'}</span>
            </div>
        </>
    )
}

export default CardRatings;