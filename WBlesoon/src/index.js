import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/js/dist/carousel'
import '../sass/style.scss';
import '../dist/scripttt.js';

var root =document.getElementById("root");
var temp=(
    <div className="conatiner">
<nav style={{"position":"fixed","z-index":"500","top":"-20px",}} className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <div className="appox">
  <img src="../favicon.png" alt="" />
  <p className="appox-txt">appox</p>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Demos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Working Step</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
        <button type="button" class="btn btn-light" >Get It Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    <div className="container-2">
        <div className="text">
            <p className="xapox">INTRODUCING XAPPOX</p>
            <h2 className="make">Make the world's software more accessible</h2>
            <h5 className="gorgeous">A gorgeous new interface keeps your canvas the focus while giving you all the power.</h5>
            <button className="btn">Download Now</button>
        </div>
        <img src="../img-1.png" alt="" />
    </div>
    <div className="container-3 ">
      <p data-aos="fade-up"
     data-aos-duration="2000" className="join">Join millions getting more mindful with Headspace</p>
      <div className="qutu-3">
        <div className="qutu" >
          <img style={{"transform":"translate(80px,0px)","margin-top":"30px"}} src="../icon-star.png" alt="" />
        <h5 className="start45" style={{"font-size": "30px","color":"white", "transform":"translate(90px,0px)"}}>4.5 Stars</h5>
        <p className="averege" style={{"font-size": "17px","color":"white", "transform":"translate(90px,10px)",}}>Averege Ratings</p>
        </div>
        <div className="qutu"> 
         <img style={{"transform":"translate(80px,0px)","margin-top":"30px"}} src="../icon-play.png" alt="" />
        <h5 className="start45" style={{"font-size": "30px","color":"white", "transform":"translate(50px,0px)"}}>611.9K Ratings</h5>
        <p className="averege" style={{"font-size": "17px","color":"white", "transform":"translate(60px,10px)",}}>On iOS and Google Play</p></div>
        <div className="qutu"> 
         <img style={{"transform":"translate(80px,0px)","margin-top":"30px"}} src="../icon-user.png" alt="" />
        <h5 className="start45" style={{"font-size": "30px","color":"white", "transform":"translate(50px,0px)"}}>66M Members</h5>
        <p className="averege" style={{"font-size": "17px","color":"white", "transform":"translate(70px,10px)",}}>Across all platforms</p></div>
      </div>
    </div>
    <div className="container-4">
      <p className="your" data-aos="fade-up"
     data-aos-duration="2000">Your well-oiled machine doesn’t have to break due to complex processes</p>

      <div className="boxslar" data-aos="fade-up"
     data-aos-duration="2000">
        <div className="box"><img src="../img-12.png" alt="" />
        <p className="txt-11">Tailor your profile We not only cater to those up</p>
        <h5 className="yourr">Your well-oiled machine doesn’t have to break down due to complex build processes, or lack of time to enforce consistency.</h5>
        </div>
        <div className="box"><img src="../img-13.png" alt="" />
        <p className="txt-11">Output optimized images with one click</p>
        <h5 className="yourr">Your well-oiled machine doesn’t have to break down due to complex build processes, or lack of time to enforce consistency.</h5>
        </div>
      </div>

     
        <img data-aos="fade-up"
     data-aos-duration="2000" style={{"width":"1100px","height":"660px","transform":"translate(400px,1100px)","border-radius":"30px",}} className="grdnt-orange" src="../bg-video.png" alt="" />
    
    </div>
   <div className="container-5" >

     <h2 className="getmore">Get more from your existing tools</h2>
     <p className="powerful">With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
    <img className="monkey" src="../carous.jpg" alt="" />
   </div>

   <div className="container-6">
     <img src="../monkey.jpg" alt="" />
   </div>
   <div className="container-7">
     <div className="up" data-aos="fade-up">
       <div className="foto col-md-4">
         <img src="../fotograf1.jpg" alt="" />
       </div>
       <div className="text col-md-4">
         <h2 className="boost">Boost productivity without creativity</h2>
         <p className="range">With a massive range of powerful new features with a gorgeous new interface, Our app is easier to use and more versatile than ever before.</p>
          <ul>
            <li><img src="../icon-1.jpg" alt="" /><p className="desing40">40+ design and code tutorials</p></li>
            <li><img src="../icon-2.jpg" alt="" /><p className="desing40">Inspiration from Apple iOS 7</p></li>
            <li><img src="../icon-3.jpg" alt="" /><p className="desing40">Available to the public, 100% FREE!</p></li>
          </ul>
       </div>
     </div>
     <div className="down" data-aos="fade-up">
       <div className="text col-md-4">
         <h2 className="boost">Create, collaborate, and celebrate</h2>
         <p className="range">With a massive range of powerful new features with a gorgeous new interface, Our app is easier to use and more versatile than ever before.</p>
          <button className="btn">Get It Now</button>
       </div>
       <div className="foto col-md-4">
         <img src="../fotograf2.jpg" alt="" />
       </div>
     </div>
   </div>
   <div className="container-8">
     <h3 className="plans">Reasonable Pricing Plans</h3>
     <p className="text-center">With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
   
    <div className="common-box">
  <div className="box-first">
  <h5 className="business-plan">Free</h5>
    <h1 className="price">$0 <span>/month</span></h1>
      <ul>
        <li>24/7 Support</li>
        <li>Free Update</li>
        <li>Unimited download</li>
        <li>1 Year Licnese</li>
        <li>Source files</li>
      </ul>
      <button className="tryitnow">Try It Now</button>
  </div>
  <div className="box-second">
  <h5 className="business-plan">Popular Plan</h5>
    <h1 className="price">$20 <span>/month</span></h1>
      <ul>
        <li>24/7 Support</li>
        <li>Free Update</li>
        <li>Unimited download</li>
        <li>1 Year Licnese</li>
        <li>Source files</li>
      </ul>
      <button className="tryitnow">Try It Now</button>
  </div>
  <div className="box-third">
    <h5 className="business-plan">Business Plan</h5>
    <h1 className="price">$100 <span>/month</span></h1>
      <ul>
        <li>24/7 Support</li>
        <li>Free Update</li>
        <li>Unimited download</li>
        <li>1 Year Licnese</li>
        <li>Source files</li>
      </ul>
      <button className="tryitnow">Try It Now</button>
  </div>

    </div>
   </div>
   <div className="container-9">
     <h4 className="frequently">Frequently Asked Quetions</h4>
     <p   className="features">With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
  
    <div className="koloni">
      <div data-aos="fade-up" data-aos-duration="3000" style={{"transform":"translate(100px,0px)"}} className="kolonateksta col-md-3">
        <ul>
          <li><img src="../ask.jpg" alt="" /><span>How to install ?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
          <li><img src="../ask.jpg" alt="" /><span>Where i can get this?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
          <li><img src="../ask.jpg" alt="" /><span>Validity of use?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="kolonateksta col-md-3">
      <ul>
          <li><img src="../ask.jpg" alt="" /><span>How to install ?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
          <li><img src="../ask.jpg" alt="" /><span>Where i can get this?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
          <li><img src="../ask.jpg" alt="" /><span>Validity of use?</span>
          <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" style={{"transform":"translate(-50px,0px)"}} className="kolonafoto col-md-3"><img src="../img-faq.png" alt="" /></div>
    </div>

   </div>
    <div className="container-10">
      <h2>Join of our community of 20,0000 users of the world’s leading organizations</h2>
      <img style={{"margin-right":"10px"}} src="../play-badge.png" alt="" />
      <img style={{}} src="../ios-badge.png" alt="" />
    </div>
    
    <div className="middle" style={{"box-shadow": "rgb(24 32 79 / 25%) 0px 100px 100px, rgb(255 255 255 / 50%) 0px 0px 0px","transform":"translate(300px,-100px)","width":"70%","height":"185px","background-color":"white"}}>
      <div className="counting-sec">
        <div className="inner-width" style={{"display":"flex","justifyContent":"space-around"}}>
          <div className="col" style={{"font-size":"15px","padding-top":"40px","flex":"1","textAlign":"center","textTransform":'uppercase'}}>
            <div className="num" style={{"font-size":"44px"}}>789M</div>
            Total Downloads
          </div>

          <div className="col" style={{"font-size":"15px","padding-top":"40px","flex":"1","textAlign":"center","textTransform":'uppercase'}}>
            <div className="num" style={{"font-size":"44px"}}>99%</div>
            Page Speed
          </div>

          <div className="col" style={{"font-size":"15px","padding-top":"40px","flex":"1","textAlign":"center","textTransform":'uppercase'}}>
            <div className="num" style={{"font-size":"44px"}}>10+</div>
            Years Top Rating App
          </div>

          <div className="col" style={{"font-size":"15px","padding-top":"40px","flex":"1","textAlign":"center","textTransform":"uppercase"}}>
            <div className="num" style={{"font-size":"44px"}}>100M</div>
            Happy Users
          </div>
        </div>
      </div>
    </div>

      <div className="container-11">
        <h4 className="teams">Trusted by teams at over 200,000</h4>
        <p className="massive">With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.</p>
         
         <div className="kutular">
         <div className="kutu">
           <img className="qunote" src="../quote.png" alt="" />
           <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
            <img className="mini" src="../profile-img-2.jpg" alt="" /> <h6 className="rager"> Roger Bentham</h6>
            <p className="manager"> Manager</p>
         </div>
         <div className="kutu">
           <img className="qunote" src="../quote.png" alt="" />
           <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
            <img className="mini" src="../profile-img-2.jpg" alt="" /> <h6 className="rager"> Roger Bentham</h6>
            <p className="manager"> Manager</p>
         </div>
         <div className="kutu">
           <img className="qunote" src="../quote.png" alt="" />
           <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
            <img className="mini" src="../profile-img-2.jpg" alt="" /> <h6 className="rager"> Roger Bentham</h6>
            <p className="manager"> Manager</p>
         </div>
         <div className="kutu">
           <img className="qunote" src="../quote.png" alt="" />
           <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
            <img className="mini" src="../profile-img-2.jpg" alt="" /> <h6 className="rager"> Roger Bentham</h6>
            <p className="manager"> Manager</p>
         </div>

         <div className="kutu">
           <img className="qunote" src="../quote.png" alt="" />
           <h5>“Mappox gives us a scalable, long-term solution for running our service, so we don’t have to jump from provider to provider as our business grows.”</h5>
            <img className="mini" src="../profile-img-2.jpg" alt="" /> <h6 className="rager"> Roger Bentham</h6>
            <p className="manager"> Manager</p>
         </div>
         </div>
         </div>
         <div className="container-12">
           <input type="text" placeholder="Enter Your E-mail" /><button type="button" class="btn btn-light">Subscribe</button>
         </div>
        <div className="container-13">
          <div className="container13">
            <div className="logo-x col-md-3">
              <img src="../logio.jpg" alt="" />
              <p>Focus on what matters—building a great user experience. Use your native visualization components.</p>
            </div>
            <div className="txt-txt col-md-2">
              <h6>Product</h6>
              <ul>
							<li>Features</li>
							<li>Stories</li>
							<li>Pricing</li>
						</ul>
            </div>
            <div className="txt-txt col-md-2">
            <h6>Support</h6>
              <ul>
							<li>Terms & Condisitons</li>
							<li>API</li>
							<li>Customers</li>
						</ul>
            </div>
            <div className="txt-txt col-md-2">
            <h6>Follow Us</h6>
              <ul>
							<li>Facebook </li>
							<li>Twitter</li>
							<li>Pinterest</li>
						</ul>
            </div>
          </div>
            <div className="line"></div>
            <h4>Copyright © 2020 xappox. <span>Freekytheme</span> All Rights Reserved.</h4>
          </div> 
         </div>


    
)

ReactDOM.render(temp,root);