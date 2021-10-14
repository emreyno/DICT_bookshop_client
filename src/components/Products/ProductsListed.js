import './products.css';
import { useHistory } from 'react-router';
import ProductIndiv from './ProductIndiv';
import { useDispatch } from "react-redux";
import { fetchOne, selected } from '../../redux/reducers/book-reducer';
const ProductsListed=({info})=> {

const history=useHistory();
const dispatch = useDispatch();


const onClickHandler=()=>{
  
  dispatch(selected(info)); 
  history.push(`/item/${info._id}`);
}
  return (
    <div className="ProductsListed" onClick={onClickHandler}>
        <div className="item-con">
          <img className="item-img"src={info.image} alt={info.title}></img>
        </div>
        <div className="item-info">
          <p className="item-title">{info.title}</p>
          <p className="item-price">&#8369; {info.price}</p>
        </div>
    </div>
  );
}

export default ProductsListed;
