import './index.css'
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Collection from './components/Shop/Collections'
import ItemDetail from './components/Shop/ItemDetail';

const App = () => {
    return (
      <Router>
      <Provider store={store}>
              
                  <ScrollToTop />
                  <Cart />    
                  <Routes>
                      <Route exact path='/' element={<Home/>}/>
                      <Route exact path='/about' element={<About/>} />
                      <Route exact path='/shop' element={<Shop/>} />
                      <Route exact path='/shop/:collection' element={<Collection/>} />
                      <Route exact path='/shop/collection/:name' element={<ItemDetail/>} />
                    
                    </Routes>             
      </Provider>
  </Router>
    
  )
      
      
}

export default App;