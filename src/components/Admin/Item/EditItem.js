import './Item.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addBooks,fetchBooks } from '../../../redux/reducers/book-reducer';

const EditItem=()=> {

  const dispatch = useDispatch();
  const state = useSelector(state => state.book.bookEdit);

  const[book,setBook]=useState(state);
  console.log(book);
  console.log(state);

  const handleInput = (e) => {
    const bookCopy = {...book}
    bookCopy[e.target.name] = e.target.value
    setBook(bookCopy);
  }
 
  const onClickHandler = () => {              
        alert("Inserted");
        dispatch(addBooks(book));

        setTimeout(() => {
          dispatch(fetchBooks());
        }, 1500);
        // setBook({
        //   title:"",
        //   image:"",
        //   desc:"",
        //   pubYear:"",
        //   author:"",
        //   stock:1,
        //   price:1,
        // });
  }

  return (
    <div className="AddItem-con">
        <>

          <input 
            className="form-control" 
            type="text" 
            name= "title"
            placeholder="Book Title"
            onChange={handleInput} 
            value={book.title}
          />
          <br/>
          <input 
            class="form-control" 
            type="text" 
            name= "image"
            placeholder="Image"
            onChange={handleInput} 
            value={book.image}
          />
          <br/>
          <input 
            class="form-control" 
            type="text" 
            name= "pubYear"
            placeholder="Year Published"
            onChange={handleInput} 
            value={book.pubYear}/>
          <br/>
          <input 
            class="form-control" 
            type="text" 
            name= "author"
            placeholder="Author"
            onChange={handleInput} 
            value={book.author}
          />
          <br/>

          <div class="form-group">
            
            <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
              name= "desc"
              placeholder="Description"
              onChange={handleInput} 
              value={book.desc}
              ></textarea>
          </div>
          <br/>

          <div class="row">
            <div class="col">
            <label for="exampleFormControlTextarea1">Price</label>
              <input 
                type="number" 
                min="1" 
                name= "price"
                class="form-control" 
                placeholder="Price"
                onChange={handleInput} 
                value={book.price}
                />
            </div>
            <div class="col">
            <label for="exampleFormControlTextarea1">Stock</label>
              <input 
                type="number" 
                min="1" 
                name= "stock"
                class="form-control" 
                placeholder="Stock"
                onChange={handleInput} 
                value={book.stock}
                />
            </div>
          </div>
          <br/>
          <button 
            type="button" 
            class="btn btn-success"
            onClick={onClickHandler}
          >
            Add Item
          </button>
          

        </>
    </div>
  );
}

export default EditItem;
