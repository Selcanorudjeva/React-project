import React from 'react';
import CartItem from './CartItem';
import data from './data';
import '../style/style.css'
import Firstslider from './Firstslider';
import Section from './Section';
import Section2 from './Section2';

const MyCart=()=>{
    return(
        <section className="p-4 container">
        <div className="itemler">
            {data.productData.map((item,index)=>{
                return(
                    <CartItem
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    item={item}
                    key={index}
                    />
                )
            })}
        </div>
    </section>
    )
}
const Apps=()=>{

    return(
       <div>
        <Firstslider />
        <Section />
        <Section2 />
        <MyCart />

       </div>

    )
}
export default Apps