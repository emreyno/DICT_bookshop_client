import './main.css';
import Footer from './Parts/Footer';
import Products from './Products/Products';
import Header from './Parts/Header';

const Main=()=> {
  return (
    <div className="main">
         <Header/>
          <Products/>
        <Footer/>
       
    </div>
  );
}

export default Main;
