import React from 'react'
import { useCart } from 'react-use-cart'
import '../style/style.css'

const CartItem = (props) => {


    const { addItem } = useCart();


    return (
            <div className="maindiv">
                <div className="cart">
                <img  src={props.img} className="photo" alt="err" />
                <div className="littlediv">
                <i style={{"marginRight":"20px"}} onClick={()=>addItem(props.item)} class="fas fa-shopping-cart me-1"></i>
                <i class="far fa-heart"> <span></span></i>
                </div>
                <div className="body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <h6 className="card-price">{props.price}$</h6>
                <div className="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                </div>
                </div>
            </div>
        
    )
}

export default CartItem