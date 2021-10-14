
import './Item.css';
import { removeBook,fetchBooks,Edit,bookEdit } from '../../../redux/reducers/book-reducer';
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router';

const List=(
    {
        info,
    }
    )=> {
        const history=useHistory();
        const dispatch = useDispatch();

        const removeHandler= (id) => {
            dispatch(removeBook (id));

            setTimeout(() => {
                dispatch(fetchBooks());
              }, 1500);

            alert("Removed");
           
          }; 

          const editHandler= (id) => {
            dispatch(Edit(info)); 
            dispatch(bookEdit(true));

            setTimeout(() => {
                history.push(`/admin/edit/${info._id}`);
              }, 10000);
            
      
          
           
          }; 
    
      

   
        

    return (
      
          
        <tr className="list-tbody-tr">
            <td className="item-td">
                <p>{info._id}</p>
            </td>
            <td className="item-td">
                <img className="list-img" alt={info.title} src={info.image}></img>
            </td>

            <td className="item-td">
                <p>{info.title}</p>
            </td>

            <td className="item-td">
                <p>{info.author}</p>
            </td>

            <td className="item-td td-pubYear">
                <p>{info.pubYear}</p>
            </td>

            <td className="item-td">
                <p>{info.price}</p>
            </td>
            <td className="item-td">
                <p>{info.stock}</p>
            </td>
            <td className="item-td">
            <img
                className="item-icon"
                src="https://cdn-icons-png.flaticon.com/512/1160/1160758.png"
                alt="edit"
                onClick={()=>editHandler(info._id)}
        />
            </td>
            <td className="item-td td-icon">
            <img
                className="item-icon"
                src="https://cdn-icons-png.flaticon.com/512/875/875550.png"
                alt="remove"
                onClick={()=>removeHandler(info._id)}
        />
            </td>
            
       
        
      </tr>
    );
  }
  
  export default List;