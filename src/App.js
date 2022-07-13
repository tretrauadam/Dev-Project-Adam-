import React from 'react';
import './index.css';
import store from './store';
import { BrowserRouter as Switch, Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Collections from './components/Shop/Collection';
import ItemDetail from './components/Shop/ItemDetail';
import ScrollToTop from './ScrollToTop';


const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <Cart/>
        <Switch>   
          <Routes>
          <Route exact path to='/'component={<Home/>}/>
          <Route exact path to='/about' component={<About/>}/>
          <Route exact path to='/shop' component={<Shop/>}/>
          <Route exact path to='/shop/:collection' component={<Collections/>} />
          <Route exact path to='/shop/collection/:name' component={<ItemDetail/>}/>
         </Routes> 
        </Switch>
      </Router>
    </Provider>
  );
};

export default App; 