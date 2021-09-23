import React from 'react'
import data from './data';
import CartItem from './CarItem';


const About = () => {
   
    return (
            <div className="itemsler col-lg-12 col-md-6 col-sm-3 ">
            {data.productData.map((item,index)=>{
        return(
            <CartItem
            img={item.img}
            title={item.title}
            text={item.text}
            span={item.span}
            like={item.like}
            comment={item.comment}
            item={item}
            key={index}
            />
        )
    })}
        </div>
    )
}

export default About
