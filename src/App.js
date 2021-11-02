import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Review from "./components/Review/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/review">
            <Review />
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
