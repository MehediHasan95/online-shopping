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

function App() {
  return (
    <div className="App">
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

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/shipment">
            <Shipment />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
