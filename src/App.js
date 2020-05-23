import React from 'react';
import Demo from './pages/Demo';
import Comp from './pages/Comp';
import Error from './pages/Error';
import './App.css';
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/home" render={(props) => <Demo name={"Shubham"}  />} />
      <Route exact path="/page" component={Comp}/>
      <Route component={Error}/>
    </Switch>
    </Router>
  );
}

export default App;
