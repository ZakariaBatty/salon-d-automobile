import React from 'react';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
