import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '../characters/Detail';

const About = ({ match, location, history }) => {
  return <p>About</p>;
};

export default function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <Detail />
      </Route>
      <Route exact path="/about" component={About} />
    </Switch>
  );
}
