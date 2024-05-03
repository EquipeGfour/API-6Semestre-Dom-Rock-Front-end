import axios from 'axios';
import React, { useState } from 'react';
import"./card-ratings.css";
import { Rating } from 'primereact/rating';
import { useReviewsInfo } from '../../hooks/hooks';

const CardRatings = () => {
    const {reviewsInfo, setReviewsInfo} = useReviewsInfo();

    const getRatings = () => {
        axios.get('')
        .then(response=> {

        }).catch(error=> {
            
        })
    }

    return (
        <>
            <div>
                    <Rating className='rating' value={`${parseInt(reviewsInfo.avg_rating)}`} readOnly stars={5} cancel={false} />
                    <span className='texto-rating'>{reviewsInfo.avg_rating}</span>
            </div>
        </>
    )
}

export default CardRatings;