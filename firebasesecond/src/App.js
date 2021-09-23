import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import style from './style.css'
const App = () => {
  return (
    <div>
      <nav className="navbar">
  <div className="container-fluid">
    <p className="navbar-brand">aora <span>.</span></p>
    <form className="d-flex formmain">
      <input className="form-control me-2" type="search" placeholder="Search in 20.000+ products... " aria-label="Search" />
      <div class="dropdown">
  <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    All
  </a>

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
    <i class="fas fa-shopping-bag"> <span></span></i>
    <i class="far fa-user"> <span></span></i>
    </div>
  </div>
</nav>
    </div>
  )
}

export default App
