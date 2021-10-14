import './App.css';
import Main from './components/Main';
import AdminMain from './components/Admin/AdminMain';
import NotFound from './components/NotFound';
import ProductIndiv from './components/Products/ProductIndiv';
import EditItem from './components/Admin/Item/EditItem';
import { Route, Switch } from 'react-router';
function App() {
  return (
    <div>
       
        <Switch>
        <Route exact path="/">
            <Main/>
        </Route>
        <Route path="/admin">
            <AdminMain/>
        </Route>
        <Route path="/item/:id">
            <ProductIndiv/>
        </Route>
        <Route path="admin//edit/:id">
            <EditItem/>
        </Route>
          <Route component={NotFound}/>
          </Switch>
        

    </div>
  );
}

export default App;
