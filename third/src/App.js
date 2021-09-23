import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import "@popperjs/core";
import "bootstrap";
import Popper from 'popper.js';
import logo from './images/logo.png';
import './style/style.css';
import avatar1 from './images/avatar1.jpg'
import avatar2 from './images/avatar2.jpg'
import avatar3 from './images/avatar3.jpg'
import avatar4 from './images/avatar4.jpg'
import avatar5 from './images/avatar5.jpg'
import avatar6 from './images/avatar6.jpg'

import auction1 from './images/auction1.jpg'
import auction2 from './images/auction2.jpg'
import auction3 from './images/auction3.jpg'
import auction4 from './images/auction4.jpg'
import auction5 from './images/auction5.jpg'

import author1 from './images/author11.jpg'
import author2 from './images/author12.jpg'
import author3 from './images/author13.jpg'
import author4 from './images/author14.jpg'
import author5 from './images/author15.jpg'
import author6 from './images/author16.jpg'
import author7 from './images/author17.jpg'
import author8 from './images/author18.jpg'
import photo from './images/posledniy.jpg'
var sekiller={
  photo1:logo,
  avatar1:avatar1,
  avatar2:avatar2,
  avatar3:avatar3,
  avatar4:avatar4,
  avatar5:avatar5,
  avatar6:avatar6,

  auction5:auction5,
  auction4:auction4,
  auction3:auction3,
  auction2:auction2,
  auction1:auction1,

  author1:author1,
  author2:author2,
  author3:author3,
  author4:author4,
  author5:author5,
  author6:author6,
  author7:author7,
  author8:author8,

  photo:photo,
}

function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={sekiller.photo1} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Explore Style 1</a></li>
                  <li><a className="dropdown-item" href="#">Explore Style 2</a></li>
                  <li><a className="dropdown-item" href="#">Explore Style 3</a></li>
                  <li><a className="dropdown-item" href="#">Explore Style 4</a></li>
                  <li><a className="dropdown-item" href="#">Live Auctions</a></li>
                  <li><a className="dropdown-item" href="#">Item Details</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Activity</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comunity
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Single</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Help Center</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Autor</a></li>
                  <li><a className="dropdown-item" href="#">Autors</a></li>
                  <li><a className="dropdown-item" href="#">Singup</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Create</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <div className="search">
            <i class="fas fa-search"></i>
            <button type="button" class="btn btn-outline-light"><i class="fas fa-wallet"></i> Wallet Connect</button>
            
            </div>
            </ul>
           
          </div>
        </div>
      </nav>

      <div className="page-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1" class=""><defs><linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1"><stop stop-color="rgba(69,40,220, 0.15)" offset="0%"></stop><stop stop-color="rgba(87,4,138, 0.15)" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="url(#linearGradient-1)"><animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze"></animate></polygon></g></svg>
        <p className="item1">NETSTORM <div className="line"></div></p>
        <h1 class="discover">Discover, collect, and sell extraordinary NFTs</h1>
        <p className="txt">Explore on the world's best & largest NFT marketplace</p>
        <div className="buttons">
        <button type="button" class="btn button1 btn-outline-light"><i class="fas fa-rocket"></i> Explore</button>
        <button type="button" class="btn button1 btn-outline-light"><i class="far fa-edit"></i> Create</button>
        </div>
      </div>

    <div className="page-2">
    <p className="item1">AUCTIONS <div className="line"></div></p>
    <h2 className="live">Live Auctions</h2>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="card" style={{"backgroundColor":"#16151A","marginLeft":"350px"}}>
              <img className="auction" src={sekiller.auction1} alt="" />
                <div className="date">
                  <ul className="days">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Minutes</li>
                    <li>Seconds</li>
                  </ul>
                  <ul className="numbers">
                    <li>206</li>
                    <li>04</li>
                    <li>48</li>
                    <li>15</li>
                  </ul>
                </div>
              <h2 className="photograhy">Photograhy</h2>
              <div className="photoava">
              <img className="avatar" src={sekiller.avatar1} alt="" /> <span>@Junaid</span>
              </div>
              <div className="lastline">
                <h6>1.1B</h6>
                <h6>1 OF 1</h6>
              </div>
            </div>
         

            <div className="card" style={{"backgroundColor":"#16151A"}}>
              <img className="auction" src={sekiller.auction2} alt="" />
                <div className="date">
                  <ul className="days">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Minutes</li>
                    <li>Seconds</li>
                  </ul>
                  <ul className="numbers">
                    <li>206</li>
                    <li>04</li>
                    <li>48</li>
                    <li>15</li>
                  </ul>
                </div>
              <h2 className="photograhy">Virtual Words</h2>
              <div className="photoava">
              <img className="avatar" src={sekiller.avatar2} alt="" /> <span>@Junaid</span>
              </div>
              <div className="lastline">
                <h6>1.1B</h6>
                <h6>1 OF 1</h6>
              </div>
            </div>
         

            <div className="card" style={{"backgroundColor":"#16151A"}}>
              <img className="auction" src={sekiller.auction3} alt="" />
                <div className="date">
                  <ul className="days">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Minutes</li>
                    <li>Seconds</li>
                  </ul>
                  <ul className="numbers">
                    <li>206</li>
                    <li>04</li>
                    <li>48</li>
                    <li>15</li>
                  </ul>
                </div>
              <h2 className="photograhy">Design Illustration</h2>
              <div className="photoava">
              <img className="avatar" src={sekiller.avatar3} alt="" /> <span>@Junaid</span>
              </div>
              <div className="lastline">
                <h6>1.1B</h6>
                <h6>1 OF 1</h6>
              </div>
            </div>
         
            <div className="card" style={{"backgroundColor":"#16151A"}}>
              <img className="auction" src={sekiller.auction4} alt="" />
                <div className="date">
                  <ul className="days">
                    <li>Days</li>
                    <li>Hours</li>
                    <li>Minutes</li>
                    <li>Seconds</li>
                  </ul>
                  <ul className="numbers">
                    <li>206</li>
                    <li>04</li>
                    <li>48</li>
                    <li>15</li>
                  </ul>
                </div>
              <h2 className="photograhy">Design Illustration</h2>
              <div className="photoava">
              <img className="avatar" src={sekiller.avatar4} alt="" /> <span>@Junaid</span>
              </div>
              <div className="lastline">
                <h6>1.1B</h6>
                <h6>1 OF 1</h6>
              </div>
            </div>

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

    </div>
  <div className="page-3">
  <p className="item1">CREATIVE ARTIST <div className="line"></div></p>
  <h4 className="sellers">Top Sellers</h4>
         
        <div className="obsaya">
        <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar1} alt="" /></a>
          <div className="colonka">
            <p className="name">@Richard</p>
            <span>1.5 BNB</span>
          </div>
          </div>

          <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar2} alt="" /></a>
          <div className="colonka">
            <p className="name">@Elena</p>
            <span>1.5 BNB</span>
          </div>
          </div>
          <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar3} alt="" /></a>
          <div className="colonka">
            <p className="name">@Richard</p>
            <span>1.5 BNB</span>
          </div>
          </div>
          <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar4} alt="" /></a>
          <div className="colonka">
            <p className="name">@Jondeo</p>
            <span>1.5 BNB</span>
          </div>
          </div>
          <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar5} alt="" /></a>
          <div className="colonka">
            <p className="name">@Jasmin</p>
            <span>1.5 BNB</span>
          </div>
          </div>
          <div className="kolonna">
          <a href="" className="seller"> <img src={sekiller.avatar6} alt="" /></a>
          <div className="colonka">
            <p className="name">@Sara</p>
            <span>1.5 BNB</span>
          </div>
          </div>
        </div>
  </div>

  <div className="page-4">
  <p className="item1">MOST POPULAR <div className="line"></div></p>
  <h4 className="collections">Popular Collections</h4>

  <div className="eightbox">
    <div className="box">
      <img src={sekiller.author1} alt="" />
      <div className="krujok">
        <img src={sekiller.avatar1} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-522</span>
    </div>
    <div className="box">
      <img src={sekiller.author2} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar2} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-252</span>
    </div>
    <div className="box">
      <img src={sekiller.author3} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar3} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-679</span>
    </div>
    <div className="box">
      <img src={sekiller.author4} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar4} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-765</span>
    </div>
    <div className="box">
      <img src={sekiller.author5} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar5} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-907</span>
    </div>
    <div className="box">
      <img src={sekiller.author6} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar6} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-123</span>
    </div>
    <div className="box">
      <img src={sekiller.author7} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar1} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-522</span>
    </div>
    <div className="box">
      <img src={sekiller.author8} alt="" />
      <div className="krujok">
           <img src={sekiller.avatar1} alt="" />
      </div>
      <h4>Virtual Words</h4>
      <span className="ec">EC-522</span>
    </div>
  </div>
  </div>
   
   <div className="page-5">
   <p className="item1">EXCLUSIVE ASSETS <div className="line"></div></p>
  <h4 className="sellers">Explore</h4>
  
     <div className="karobocka">
       <div className="box-4">
       <img className="auction" src={sekiller.auction1} alt="" />
              <h4 className="walking">Walking On Airs</h4>
              <h2 className="photograhy">Owned By <span>Richard</span></h2>
              <div className="lastline">
                <h6>1.5 EHT</h6>
                <h6>1 OF 1</h6>
              </div>
              <button type="button" class="btn btnbid btn-outline-light"><i class="fas fa-shopping-bag"></i> Place a Bid</button>

       </div>
     
       <div className="box-4">
       <img className="auction" src={sekiller.auction2} alt="" />
              <h4 className="walking">Walking On Airs</h4>
              <h2 className="photograhy">Owned By <span>Richard</span></h2>
              <div className="lastline">
                <h6>1.5 EHT</h6>
                <h6>1 OF 1</h6>
              </div>
              <button type="button" class="btn btnbid btn-outline-light"><i class="fas fa-shopping-bag"></i> Place a Bid</button>

       </div>
     
       <div className="box-4">
       <img className="auction" src={sekiller.auction3} alt="" />
              <h4 className="walking">Walking On Airs</h4>
              <h2 className="photograhy">Owned By <span>Richard</span></h2>
              <div className="lastline">
                <h6>1.5 EHT</h6>
                <h6>1 OF 1</h6>
              </div>
              <button type="button" class="btn btnbid btn-outline-light"><i class="fas fa-shopping-bag"></i> Place a Bid</button>

       </div>
     
       <div className="box-4">
       <img className="auction" src={sekiller.auction4} alt="" />
              <h4 className="walking">Walking On Airs</h4>
              <h2 className="photograhy">Owned By <span>Richard</span></h2>
              <div className="lastline">
                <h6>1.5 EHT</h6>
                <h6>1 OF 1</h6>
              </div>
              <button type="button" class="btn btnbid btn-outline-light"><i class="fas fa-shopping-bag"></i> Place a Bid</button>

       </div>
     
     </div>
 
     <button type="button" class="btn btnload btn-outline-light">Load More</button>

   </div>
   <div className="page-6">
   <p className="item1">How It Works <div className="line"></div></p>
  <h4 className="sellers">Create and sell your NFTs</h4>

  <div className="posledniybox">
    <div className="boxpos">
    <i class="fas fa-wallet"></i>
      <h4 className="txt-wallet">Set up your wallet</h4>
      <p className="txt-once">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>
    </div>
    <div className="boxpos">
    <i class="fas fa-th-large"></i>
    <h4 className="txt-wallet">Create your collection</h4>
    <p className="txt-once">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>

    </div>
    <div className="boxpos">
    <i class="fas fa-inbox"></i>
    <h4 className="txt-wallet">Add your NFTs</h4>
    <p className="txt-once">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>

    </div>
    <div className="boxpos">
    <i class="fas fa-shopping-bag"></i>
    <h4 className="txt-wallet">List them for sale</h4>
    <p className="txt-once">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>

    </div>
  </div>
   </div>
    <div className="footer">
    <div className="obsi">
    <div className="qutu">
        <img src={sekiller.photo} alt="" />
      </div>
      <div className="qutu">
        <h4 class="footer-title">Useful Links</h4>
        <ul>
      <li><a href="#">All NFTs</a></li>
      <li><a href="#">How It Works</a></li><li><a href="#">Create</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Privacy &amp; Terms</a></li>
      </ul>
      </div>
      <div className="qutu">
      <h4 class="footer-title">Community</h4>
        <ul>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Facebook</a></li><li><a href="#">Create</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagramm &amp; Terms</a></li>
      </ul>
      </div>
      <div className="qutu">
      <h4 class="footer-title">Subscribe Us</h4>

      <input type="text" placeholder="info@gmail.com" /><button className="plane"><i class="far fa-paper-plane"></i></button>
      </div>
    </div>
    <div className="linenew"></div>

    <div className="txtt">
      <p className="2021">©2021 NetStorm, All Rights Reserved.</p>
      <h6 className="love">
Made with <i class="fas fa-heart"></i> By Themeland</h6>
    </div>
    </div>
    </div>
  );
}

export default App;
