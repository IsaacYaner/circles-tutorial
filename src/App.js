import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FlowSetup from './flowchart/FlowSetup';
import FlowState from './flowchart/FlowState';
import FlowMini from './flowchart/FlowMini';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/FlowSetup" component={FlowSetup}/>
        <Route exact path="/FlowState" component={FlowState}/>
        <Route exact path="/FlowMini" component={FlowMini}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
