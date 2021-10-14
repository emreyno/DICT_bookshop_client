import './header.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
const Header=()=> {

  const [keyword,setKeyword] = useState("")
  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const searchHandler =()=>{
    alert(`you are searching for ${keyword}`);
  };
  const history=useHistory();
  return (
    <div className="header">
      <div>
        <img onClick={()=>history.push("/")} className="logo" src="https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png"></img>
      </div>
      <div className="search-container">
          <form className="search-form">
            <div className="srch-input">
              <input className="input-form" type="text" placeholder="Search for title or author" name="keyword"
              onChange={handleInput} 
              value={keyword}
              />
            </div>
            
            <div className="srch-con">
              <img className="srch-icon"src="https://img-premium.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1633646556~hmac=f56c1a280bc68b3936a833d1b73a75f6" onClick={searchHandler}></img>
            </div>
           
          </form>
      </div>

        <div className="cart-con">
          <img className="cart-icon" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"></img>
        </div>
    </div>
  );
}

export default Header;