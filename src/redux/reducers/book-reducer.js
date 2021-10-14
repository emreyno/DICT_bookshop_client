import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get('/books');
  return response.data;
  
});

// export const fetchOne = createAsyncThunk('book/fetchOne', async (id) => {
//   const response = await axios.get(`/books/${id}`);
//   return response.data;
  
// });
// export const editBooks = createAsyncThunk('book/fetchOne', async (id) => {
//     const response = await axios.get(`/books/${id}`);
//     return response.data;
    
//   });

export const addBooks = createAsyncThunk('book/addBooks', async (books) => {
  const newBook = {
    title:books.title,
    image:books.image,
    pubYear:books.pubYear,
    author:books.author,
    desc:books.desc,
    price:books.price,
    stock:books.stock,
     
  };

  const response = await axios.post('/books', newBook);
  return response.data;
});



export const removeBook = createAsyncThunk('book/removeBook', async (id) => {
  const response = await axios.delete(`/books/${id}`);
  return response.data;
});

// export const clearTask = createAsyncThunk('todo/clearTask', async () => {
//   const response = await axios.post(`/clear/todos`);
//   return response.data;
// });

// export const completeTask = createAsyncThunk('todo/completeTask', async (id) => {
//   const response = await axios.put(`/todos/${id}`, {completed: true})
//   return response.data;
// });

export const BookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    id:"",
    selectedBook:[],
    bookEdit:[  { 
      title:"",
      image:"",
      desc:"",
      pubYear:"",
      author:"",
      stock:1,
      price:1
    }
  ],
    isBookEdit:false,
  },
  reducers: {
      selected:(state,action)=>{
        const selected ={
        title:action.payload.title,
        image:action.payload.image,
        pubYear:action.payload.pubYear,
        author:action.payload.author,
        desc:action.payload.desc,
        price:action.payload.price,
        stock:action.payload.stock,
        };
        state.selectedBook = [selected];
        
      },
      Edit:(state,action)=>{
        const Edit ={
        title:action.payload.title,
        image:action.payload.image,
        pubYear:action.payload.pubYear,
        author:action.payload.author,
        desc:action.payload.desc,
        price:action.payload.price,
        stock:action.payload.stock,
        };
        state.bookEdit = [Edit];
        
      },
      bookEdit:(state,action)=>{
        state.isBookEdit = action.payload;
        
      }
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;

    },
    [fetchBooks.error]: (state, action) => {
      alert("Failed to get books");
    },

    // [fetchOne.fulfilled]: (state, action) => {
    //   state.selectedBook = action.payload;
    //   console.log(action);
    // },
    // [fetchOne.error]: (state, action) => {
    //   alert("Failed to get Book");
    // },
    [addBooks.fulfilled]: (state, action) => {
      state.books = [action.payload, ...state.books,];
    },
    [addBooks.error]: (state, action) => {
      alert("Failed to add book");
    },

    [removeBook.fulfilled]: (state, action) => {
      // console.log(`ito yung remove fullfilled state`);
      // console.log(state)
      // console.log(`ito yung remove fullfilled action`);
      // console.log(action)
      state.id = action.payload;
    },
    [removeBook.error]: (state, action) => {
      alert("Failed to Delete Book");
    },
    // [clearTask.fulfilled]: (state, action) => {
    //   state.tasks = action.payload;
    // },
    // [clearTask.error]: (state, action) => {
    //   alert("Could not clear tasks");
    // },
    // [completeTask.fulfilled]: (state, action) => {
    //   state.tasks = action.payload;
    // },
    // [completeTask.error]: (state, action) => {
    //   alert("Could not complete tasks");
    // }
  }
});


export const { selected,bookEdit,Edit } = BookSlice.actions
export default BookSlice.reducer;