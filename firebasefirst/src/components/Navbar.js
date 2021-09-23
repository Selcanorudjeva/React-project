import React from 'react'
import style from '../style/style.css'
import { useCart } from 'react-use-cart';
import { Link, } from 'react-router-dom';
import 'react-router-dom';
const Navbar = () => {
    const {totalItems}=useCart();
    return (
        <div>
          <nav className="navbar">
      <div className="container-fluid">
        <Link to="/"><p className="navbar-brand">aora <span>.</span></p></Link>
        <form className="d-flex formmain">
          <input className="form-control me-2" type="search" placeholder="Search in 20.000+ products... " aria-label="Search" />
          <div class="dropdown">
      <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">All</a>
    
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">All</a></li>
        <li><a class="dropdown-item" href="#">Art and decor</a></li>
        <li><a class="dropdown-item" href="#">Bathroom</a></li>
        <li><a class="dropdown-item" href="#">Bedding</a></li>
        <li><a class="dropdown-item" href="#">Fashion</a></li>
        <li><a class="dropdown-item" href="#">Furnuture</a></li>
        <li><a class="dropdown-item" href="#">Lightnig</a></li>
        <li><a class="dropdown-item" href="#">Kitchen Accessories</a></li>
        <li><a class="dropdown-item" href="#">Phone Accessories</a></li>
        <li><a class="dropdown-item" href="#">Shoes</a></li>
        <li><a class="dropdown-item" href="#">Vintage</a></li>
      </ul>
      
    </div>
        <button className="btn searchbut" type="submit">Search</button>
        </form>
        <div className="trikonki">
        <i class="far fa-heart"> <span></span></i>

        <Link to="/Cart" className="shopbag" id="cardbtn" type="submit"><i class="fas fa-shopping-cart me-1"></i><span className="totalit">{totalItems}</span></Link>
         
        <i class="far fa-user"><span></span></i>
        {/* <Button variant="btn btn-success" onClick={() => history.push('/Cart')}>Click button to view products</Button> */}
        </div>
      </div>
    </nav>
          <div className="second-navbar-line">
        <div className="buttonr">
            <button class="btn alldeparetments " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-bars"></i> All Departments</button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
            </div>
             </div>
        </div>
        <div className="dropdowns">
        <div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Home
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Elements
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Promotion
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Shop
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Blog
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="dropdown dropdow1">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Page
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
        </div>
        
        <div class="dropdown dropdow1" style={{"transform":"translate(-200px,0px)"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Recent Viewing
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
          </div>
        </div>
         )
}


export default Navbar
