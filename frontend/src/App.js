import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RatingPage from './components/RatingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/ratings" component={RatingPage} />
      </Switch>
    </Router>
  );
};

export default App;