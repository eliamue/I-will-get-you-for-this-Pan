import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Detail from '../characters/Detail';
import List from '../characters/List';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}
