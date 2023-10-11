import React, { useState } from 'react';
import '../SingleCourse/singleCourse.css'


const SingleCourse = (props) => {
    const {title,description,image,price,rating} = props.course;
    const [ratings,setRating]=useState('')
    const showRating=()=>{
        setRating(rating)
    }
    return (
        
        <div className='container d-flex m-5'>
        <div className='card' style={{width:'18rem'}}>
        <img src={image} class='card-img-top' alt=''/>
        <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <h5 className='card-title'>${price}</h5>
        <h6>{ratings}</h6>
        <button onClick={()=>{showRating(ratings)}}>Show Rating:{}</button>
        <button onClick={()=>{props.handleClick(props.course)}}>buy Now</button>
        </div>
        </div>
        </div>
    );
};

export default SingleCourse;