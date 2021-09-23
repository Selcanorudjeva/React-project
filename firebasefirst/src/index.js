import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'react-use-cart';
import Apps from './components/Apps';
import Section from './components/Section'
import Navbar from './components/Navbar';
import { BrowserRouter,Route} from 'react-router-dom';
import './firebaseConfig'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Firstslider from './components/Firstslider'
import Section2 from './components/Section2'
import Cart from './components/Cart'


const App=()=>{
return(
  <div>  
    <BrowserRouter>
  <CartProvider>
  <Navbar></Navbar>
  <Route path="/" component={Apps} exact></Route>
  <Route path="/cart" component={Cart}></Route>
  </CartProvider>
  </BrowserRouter>
</div>
)
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

