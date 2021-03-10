import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Movies from "./components/Club/Club";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/ClubDetails/ClubDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/movie/:idLeague/">
          <MovieDetails />
        </Route>

        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
