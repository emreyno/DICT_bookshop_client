import './adminMain.css';
import AddItem from "./Item/AddItem";
import ItemList from './Item/ItemList';
import EditItem from './Item/EditItem';
const AdminMain=(props)=> {
    return (
      <div className="admin-main">
        {/* <div className="admin-nav">
            <div className="admin-link">
              Add Item
            </div>
            <div className="admin-link">
              Add Item
            </div>
            <div className="admin-link">
              Add Item
            </div>
            <div className="admin-link">
              Add Item
            </div>
        </div> */}
          
          <div className="admin-content">
            <AddItem/>
          </div> 
          <br/>

      <div className="admin-content">
            <ItemList/>
          </div>

        
      </div>
    );
  }
  

  export default AdminMain;