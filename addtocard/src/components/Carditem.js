import React from 'react'
import {useCart} from 'react-use-cart'
import style from './style.css'

const Carditem = (props) => {

    const{addItem}= useCart();

    return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 pverflow-hidden h-100 shadow" style={{"marginRight":"10px"}}>
                    <img src={props.img} className="card-img-top"  alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <h6 className="card-title">{props.price}$</h6>

                        <button id="foot" onClick={()=>addItem(props.item)} >
                        <button className="button-os" >
                            <a href="#">Add </a>
                        </button>
                        </button>
                        
                    </div>
                </div>
            </div>
       
    )
}

export default Carditem
