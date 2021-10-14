import React from "react";
import { GlobalStyle } from "./globalStyle";
import {Switch, Route } from "react-router-dom";
import {Welcome} from "./components/welcome";
import {Default} from "./components/default";

const App = () => {
  return (
      <>
      <GlobalStyle />
        <Switch>
            <Route exact path="/">
                <Welcome/>
            </Route>
            <Route path="/default">
                <Default/>
            </Route>
        </Switch>
    </>
  );
};

export default App;
