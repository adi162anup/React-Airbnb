import React from 'react';
// import Katie from '../Images/Katie_Zafares.jpeg'

export default function Card(props) {
    return(
        <div className='card'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img src={props.img} className = 'card_img' />
            <div className='card_stats'>
            <span className='card_star'><i class='fa fa-star'></i></span>
            <span className='card_rating'>{props.rating}</span>
            <span className='card_review'>{props.review} <b>.</b></span>
            <span className='card_place'>{props.place}</span>
            </div>
            <div className='card_desc'>
            <p className='card_description'>{props.desc}</p>
            <p className='card_cost'><b>{props.cost}</b> / person</p>
            </div>
        </div>
    )
}