import React from 'react'
import { useCart } from 'react-use-cart'


const Card = () => {

    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyItem,
        emptyCart,}= useCart();
       
        if(isEmpty) return <h1 className="text-center yourempty"><marquee behavior="" direction="">Your Card is Empty</marquee></h1>

    return (
        <selection className="py-4 container">
            <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                <h2 className="totalprice">Total Price: ${cartTotal}</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 className="card-total">Card({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className="d-flex align-items-center justify-content-center table m-0 ">
                    <tbody>
                        {items.map((item,index)=>{

                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{"height":"6rem"}} alt="" />
                                    </td>
                                    <td className="tdtitle">{item.title}</td>
                                    <td className="tdprice">{item.price}$</td>
                                    <td className="tdquantity" >Quantity:{item.quantity}</td>
                                    <td>
                                    <button class="button-82-pushable" role="button" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>
                                        <span style={{"backgroundColor":"green"}} class="button-82-shadow"></span>
                                        <span style={{"backgroundColor":"green"}} class="button-82-edge"></span>
                                        <span style={{"backgroundColor":"green"}} class="button-82-front text">+</span>
                                        </button>

                                    <button class="button-82-pushable" role="button" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>
                                        <span style={{"backgroundColor":"green"}} class="button-82-shadow"></span>
                                        <span style={{"backgroundColor":"green"}} class="button-82-edge"></span>
                                        <span style={{"backgroundColor":"green"}} class="button-82-front text" >-</span>
                                        </button>
                                        <button class="button-24" role="button" onClick={()=>removeItem(item.id)}>remove item</button>
                                        </td>

                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                <div className="div col-auto ms-auto d-flex align-items-center justify-content-center" ></div>
                        <button className="btn btn-danger m-2 " onClick={()=>emptyCart()}><i class="far fa-trash-alt"></i></button>
                        <button className="buynow ">Buy now</button>
            </div>
        </selection>
    )
}

export default Card
