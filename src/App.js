import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import About from "./components/About/About";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import LogIn from "./components/LogIn/LogIn";
import Shipment from "./components/Shipment/Shipment";
import { createContext, useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Cookies from "js-cookie";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setLoggedInUser(token);
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/product-details/:details">
            <ProductDetails />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <Route path="/login">
            <LogIn />
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
