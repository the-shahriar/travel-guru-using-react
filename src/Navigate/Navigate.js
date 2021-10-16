import React from 'react';
import Header from '../Shared/Header/Header';
import { Switch, Route, useLocation} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Contact from '../Pages/Contact/Contact';
import NotFound from '../Pages/NotFound/NotFound';
import Footer from '../Shared/Footer/Footer';
import Register from '../Pages/Register/Register';

const Navigate = () => {

  let location = useLocation();
  console.log(location);
    return (
      <div>
        <div className={location.pathname === '/' || location.pathname === '/home' ? "home" : ""}>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Navigate;