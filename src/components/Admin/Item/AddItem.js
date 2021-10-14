import './Item.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addBooks,fetchBooks,Edit,bookEdit } from '../../../redux/reducers/book-reducer';

const AddItem=()=> {

  const dispatch = useDispatch();
  const state = useSelector(state => state.book.bookEdit);
  const[book,setBook]=useState({ title:state[0].title,
  image:"",
  desc:"",
  pubYear:"",
  author:"",
  stock:1,
  price:1
});
  

  
  const editCondition = useSelector(state => state.book.isBookEdit);
  
 


  console.log(state[0]);
  console.log(book);
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
        <label for="exampleFormControlTextarea1">Book Title</label>
          <input 
            className="form-control" 
            type="text" 
            name= "title"
            placeholder={book.title}
            onChange={handleInput} 
            value={book.title}
          />
          <br/>
          <label for="exampleFormControlTextarea1">Image</label>
          <input 
            class="form-control" 
            type="text" 
            name= "image"
            placeholder="Image"
            onChange={handleInput} 
            value={book.image}
          />
          <br/>
          <label for="exampleFormControlTextarea1">Year Published</label>
          <input 
            class="form-control" 
            type="text" 
            name= "pubYear"
            placeholder="Year Published"
            onChange={handleInput} 
            value={book.pubYear}/>
          <br/>
          <label for="exampleFormControlTextarea1">Author</label>
          <input 
            class="form-control" 
            type="text" 
            name= "author"
            placeholder="Author"
            onChange={handleInput} 
            value={book.author}
          />
          <br/>
          <label for="exampleFormControlTextarea1">Description</label>
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

export default AddItem;
