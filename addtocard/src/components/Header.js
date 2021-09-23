import React from 'react'
import Carditem from './Carditem'
import data from './data';

const Header = () => {
    return (
        <header>
            <h1 className="text-center " style={{"font-family":" 'Handlee', cursive","transform":"translate(30px,20px)"}}>All Items</h1>
                <section className="container">
                <div className="row">
                {data.productData.map((item,index)=>{
                    return(
                        <Carditem 
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
       
       
        </header>
    )
}

export default Header
