import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-switch';
import Home from './components/Home/Home';

const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <Cart />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/shop/:collection' component={Collections} />
          <Route exact path='/shop/collection/:name' component={ItemDetail}/>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App; 