import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import'./components/Missions';
import  '../src/style/style.css'
import { BrowserRouter,Route ,Link} from "react-router-dom";
import Missions from "./components/Missions";


const Nav = () => {
  return (
     
      <div>
      <nav className="navbar navbar-expand-lg ">
   <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link style={{'font-family': 'Playball, cursive','font-size': '40px','color': '#0F3869'}} className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>

         <li className="nav-item">
           <Link style={{'font-family': 'Playball, cursive','font-size': '40px','color': '#0F3869'}} className="nav-link active" aria-current="page" to="/about">About</Link>
         </li>

         <li className="nav-item">
           <Link style={{'font-family': 'Playball, cursive','font-size': '40px','color': '#0F3869'}} className="nav-link active" aria-current="page" to="/service">Service</Link>
         </li>

         <li className="nav-item">
           <Link style={{'font-family': 'Playball, cursive','font-size': '40px','color': '#0F3869'}} className="nav-link active" aria-current="page" to="/missions">Missions</Link>
         </li>

         <li className="nav-item">
           <Link style={{'font-family': 'Playball, cursive','font-size': '40px','color': '#0F3869'}} className="nav-link active" aria-current="page" to="/contact">Contact</Link>
         </li>
         
         
         
       </ul>
     
     </div>
   </div>
 </nav>

</div> 
  );
}


const App = () => {
  return (
    <BrowserRouter>
<Nav />
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/service" component={Service}></Route>
    <Route path="/missions" component={Missions}></Route>
    <Route path="/contact" component={Contact}></Route>
    
    </BrowserRouter>
  );
};

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

