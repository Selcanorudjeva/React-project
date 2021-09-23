import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../style/style.css';

import product from '../images/product-111.jpg';
import product1 from '../images/product-135.jpg';
import product2 from '../images/product-166.jpg';
import product3 from '../images/product-172.jpg';
import product4 from '../images/product-176.jpg';
import product5 from '../images/product-192.jpg';
import product6 from '../images/product-181.jpg';
import { Router } from 'react-router';
import 'react-router-dom';


var sekiller={
    product:product,
    product2:product2,
    product3:product3,
    product1:product1,
    product4:product4,
    product5:product5,
    product6:product6,
}

const options = {
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 0,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 3,
        }
    },
  };
  class App extends React.Component {
    render() {

      return (
<div className="container" style={{"height":"550px","backgroundColor":"white","paddingTop":"20px","paddingRight":"20px", "paddingLeft":"20px"}}>
<div className="owldiv">
                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                        <div class="item">
                        <img src={sekiller.product} />
                        <span className="sold"> Sold 30/98</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "30%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Smart Red Lacquer Kitchen Cabinet</h3>
                        <span className="ikea">BUFFA</span>
                        <h4 className="prices">$9.00</h4>
                        <div className="size">
                            <div className="size-l">L</div>
                            <div className="size-m">M</div>
                        </div>
                        </div>

                        <div class="item">
                        <img src={sekiller.product1} />
                        <span className="sold"> Sold 5/101</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "5%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="101"></div>
                        </div>
                        <h3 className="text">Gree PE and PVC Mixed Hinged</h3>
                        <span className="ikea">BUCKYZ</span>
                        <h4 className="prices">$60.00-$67.00</h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="fas fa-star star1"></i></p>
                        </div>

                        <div class="item">
                        <img src={sekiller.product2} />
                        <span className="sold"> Sold 10/18</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "60%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Magnolia Boutique</h3>
                        <span className="ikea">CERRY</span>
                        <h4 className="prices">$200.00 <strike>$300.000</strike></h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>

                        <div class="item">
                        <img src={sekiller.product3}/>
                        <span className="sold"> Sold 26/77</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "35%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">DressUP Dress Shop</h3>
                        <span className="ikea">Cerry</span>
                        <h4 className="prices">$350.99 <strike>$491.000</strike></h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>

                        </div>

                        <div class="item">
                        <img src={sekiller.product4}/>
                        <span className="sold"> Sold 24/77</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "30%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Panese Cartoon Game Tshirt</h3>
                        <span className="ikea">IKEA</span>
                        <h4 className="prices">$100.00-$150.00</h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>

                        <div class="item">
                        <img src={sekiller.product6}/>
                        <span className="sold"> Sold 28/77</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "30%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Hooded Nike Boys NSW</h3>
                        <span className="ikea">IKEA</span>
                        <h4 className="prices">$199.00-$290.00</h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>

                        <div class="item">
                        <img src={sekiller.product5}/>
                        <span className="sold"> Sold 28/77</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "30%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Hooded Nike Boys NSW</h3>
                        <span className="ikea">IKEA</span>
                        <h4 className="prices">$199.00-$290.00</h4>
                        <p className="starsic"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>

                        <div class="item">
                        <img src={sekiller.product} />
                        <span className="sold"> Sold 30/98</span>
                        <div class="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "30%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="98"></div>
                        </div>
                        <h3 className="text">Smart Red Lacquer Kitchen Cabinet</h3>
                        <span className="ikea">BUFFA</span>
                        <h4 className="prices">$9.00</h4>
                        <div className="size">
                            <div className="size-l">L</div>
                            <div className="size-m">M</div>
                        </div>
                        </div>
                    </OwlCarousel>
  </div>
</div>
  )
  };
  }
  export default App;