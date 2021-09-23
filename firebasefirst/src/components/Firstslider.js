import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../../node_modules/bootstrap/js/dist/carousel'

import bg1 from '../images/bg-slider1.jpg'
import bg2 from '../images/bg-slider2.jpg'
import { Animated } from 'react-animated-css'

var sekiller={
    photo1:bg1,
    photo2:bg2,
}
const Firstslider = () => {
    return (
        
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active first">
            <img src={sekiller.photo1} alt="" />
            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <h2> Korean <span>Fabric Woden Sofa</span></h2>
            </Animated>
            <Animated animationIn="slideInDown" animationOut="fadeOut" isVisible={true}>
          <div className="text-1">
          <span style={{"color":"gray"}} >Big Sale Up To</span>
            <p className="price-1">$129.99</p>
          </div>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <button type="button" class="btn btn-warning">Shop Now</button>
            </Animated>

        </div>
        <div className="carousel-item second">
        <img src={sekiller.photo2} alt="" />
        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <h2> Buy Your Own <span>Home Interior</span></h2>
            </Animated>
            <Animated animationIn="slideInDown" animationOut="fadeOut" isVisible={true}>
          <div className="text-1">
          <span style={{"color":"gray"}} >Buy thousands from</span>
            <p className="price-1">$19.99</p>
          </div>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <button type="button" class="btn btn-warning">Shop Now</button>
            </Animated>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    )
}

export default Firstslider
