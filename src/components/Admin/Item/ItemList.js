import './Item.css';
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchBooks} from '../../../redux/reducers/book-reducer';
import List from './List';
const ItemList=()=> {

 
    const state = useSelector(state => state.book.books);

    const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(fetchBooks());
                
            },[]);
    
        

    

    

     

      const itemsList = state.map(list =><List key={list._id} info={list} />);
    return (
      <div className="item-list">
          
          
                <table className="list-table">
                    <thead className="list-thead">
                        <tr className="list-thead-tr">
                            <th className="item-th">
                                ID
                            </th>
                            <th className="item-th">
                                Image
                            </th>

                            <th className="item-th">
                                Title
                            </th>

                             <th className="item-th">
                                Author
                            </th>

                            <th className="item-th">
                                Year Published
                            </th>

                             <th className="item-th">
                               Stock
                            </th>
                            <th className="item-th">
                                Price
                            </th>
                            <th className="item-th">
                               Edit
                            </th>
                            <th className="item-th">
                                Remove
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody className="list-tbody">
                        {itemsList}
                        {/* <List/> */}
                    </tbody>
                </table>
        
        
      </div>
    );
  }
  
  export default ItemList;