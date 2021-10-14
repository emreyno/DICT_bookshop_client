import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './reducers/book-reducer';

export default configureStore({
  reducer: {
    book: bookReducer

  },
});
