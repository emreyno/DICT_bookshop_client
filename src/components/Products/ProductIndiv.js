import './products.css';
import { useDispatch,useSelector } from "react-redux";
import { selected } from '../../redux/reducers/book-reducer';
import { useEffect,useState } from 'react';
import Footer from '../Parts/Footer';
import Header from '../Parts/Header';
const ProductIndiv=()=> {


  const state = useSelector(state => state.book.selectedBook);
  // const dispatch = useDispatch();
console.log(state);

const EventHandler=()=>{
      alert("Will be Available Soon")
}

  return (
    <div className="ProductIndiv">

      <Header/>


        <div className="item-details">
          <div className="item-left">
              <img className="indiv-img"src={state[0].image} alt={state[0].title}></img>
              <h3 className="indiv-title">{state[0].title}</h3>
              <div className="indiv-price">&#8369; {state[0].price}</div>
              <p className="indiv-stock">Available Stock: {state[0].stock}</p>

          </div>

          <div className="item-right">
              
              <div className="indiv-desc">{state[0].desc}</div>
              
             
              <button type="button" className="btn btn-outline-warning cart-btn" onClick={EventHandler}>ORDER</button>
              
          </div>
        </div>

        
          <Footer/>
       

          
          
         
          
       
    </div>
  );
}

export default ProductIndiv;
