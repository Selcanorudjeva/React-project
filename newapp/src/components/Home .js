import React from 'react'
import About from '../components/About'
import Information from '../components/Information'
import { CartProvider } from 'react-use-cart';
import { BrowserRouter,Route} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const Home  = () => {
    return (
        <div>
<React.StrictMode>
  <BrowserRouter>
  <CartProvider>
  <Route path="/" component={About} exact></Route>
  <Route path="/information" component={Information}></Route>
  </CartProvider>
  </BrowserRouter>
  </React.StrictMode>,
        </div>
    )
}

export default Home 
