import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutComponent from "./components/about-component/about-component";
import ListComponent from "./components/list-component/list-component";

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <Router>
        <Switch>
          <Route path="/about" component={AboutComponent} />
          <Route path="/" component={ListComponent} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
