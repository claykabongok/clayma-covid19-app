import React, { Suspense, lazy } from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import loadingIcon from "./Assets/dashboardloader3.gif";

const Homepage = lazy(() => import("./Components/Homepage"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        }
      >
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
