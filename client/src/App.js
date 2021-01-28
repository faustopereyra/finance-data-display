import React from "react"

import { Switch, Route } from "react-router-dom"

import ListData from "./pages/list-data/list-data.component"
import ViewData from "./pages/view-data/view-data.component"

import "./app.scss"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListData} />
        <Route path="/view" component={ViewData} />
      </Switch>
    </div>
  );
}

export default App;