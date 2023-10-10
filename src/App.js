import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/rockets" component={Rockets} />
          <Route path="/missions" component={Missions} />
          <Route path="/dragons" component={Dragons} />
          <Route path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
