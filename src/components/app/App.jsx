import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '../characters/Detail';
import List from '../characters/List';

export default function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <Detail />
      </Route>
      <Route exact path="/">
        <List />
      </Route>
    </Switch>
  );
}
