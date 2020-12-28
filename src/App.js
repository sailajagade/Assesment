import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import ShowContainer from "./Containers/ShowContainer";
import "./App.css";
import DisplayShows from "./Components/DisplayShows";
import DisplayShowDetailsContainer from "./Containers/DisplayShowDetailsContainer";
import SearchComponent from "./Components/SearchComponent";
import NotFound from "./Components/NotFound";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="body">
          <SearchComponent />
          <Switch>
            <Route path="/" exact component={ShowContainer} />
            <Route
              path="/showdetails/:searchvalue"
              exact
              component={DisplayShowDetailsContainer}
            />
            <Route
              path="/displayShows/:searchvalue"
              exact
              component={DisplayShows}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
