import React, { useEffect, useState } from 'react'
import data from '../FakeData/FakeData'
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';



const Course = () => {
    const [info,setInfo]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        setInfo(data)
    },[])

    const handleClick=(course)=>{
         const newCart = [...cart,course]
         setCart(newCart)
    }
    return (
        <div className='d-flex container justify-content-around'>
            <div>
            {
                info.map((item,index)=>{
                    return <SingleCourse key={index} course={item} handleClick={handleClick}></SingleCourse>
                })
            }
            </div>
            
            <div className='border border-black p-5'>
            <Cart cart={cart}></Cart>
            </div>

            
        </div>
    );
};

export default Course;