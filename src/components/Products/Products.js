import './products.css';

import ProductsListed from './ProductsListed';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";

import { fetchBooks } from '../../redux/reducers/book-reducer';
const Products=()=> {

  const state = useSelector(state => state.book.books);
  const dispatch = useDispatch();

      useEffect(() => {          
          dispatch(fetchBooks());              
          },[]);
   



    const itemslisted = state.map(list =><ProductsListed key={list._id} info={list} />);

  return (
    <div className="products">

      <div className="products-con">
        {itemslisted}
      </div>
    </div>
  );
}

export default Products;
