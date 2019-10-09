import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {

  
  return (
    <Router>
      <div className="App">
         <NavBar/>
        <Switch>
            <PrivateRoute exact path="/protected" component={FriendList} />
            <PrivateRoute path="/addfriend" component={AddFriend}/>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;