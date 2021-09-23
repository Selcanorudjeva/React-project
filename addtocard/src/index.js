import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Card from './components/Card'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from 'react-use-cart';



const App =()=>{
  return(
    <div>
      <CartProvider>
      <Header></Header>
      <Card></Card>
      </CartProvider>
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


