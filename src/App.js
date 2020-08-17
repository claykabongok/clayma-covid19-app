import React from 'react';

import './Styles/App.scss';
import {
  BrowserRouter as Router, 
  Route,
  
  Switch,
} from "react-router-dom";

import Homepage from "./Components/Homepage";


function App() {
  return (
    <Router  >
    <Switch>
      <Route  exact path="/" component={Homepage} />
    
    </Switch>
  </Router>
  );
}

export default App;
