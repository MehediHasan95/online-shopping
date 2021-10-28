import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NoMatch from "./components/NoMatch/NoMatch";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Baby from "./components/Baby/Baby";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/men">
            <Men></Men>
          </Route>
          <Route path="/women">
            <Women></Women>
          </Route>
          <Route path="/baby">
            <Baby></Baby>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
