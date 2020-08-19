import React, { Suspense, lazy } from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import loadingIcon from "./Assets/dashboardloader3.gif";

const Homepage = lazy(() => import("./Components/Homepage"));

const SearchCountry = lazy(() => import("./Components/SearchCountry"));
const ViewCountry = lazy(() => import("./Components/ViewCountry"));
const Region = lazy(() => import("./Components/Regions"));

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
          <Route exact path="/searchcountry" component={SearchCountry}/>
          <Route exact path="/viewcountry/:countryCode/:countryname" component={ViewCountry}/>
          <Route exact path="/region/:regionName" component={Region}/>
        
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
