import React from 'react';
import './App.css';
import SideBar from './common/SideBar';
import Chat from './common/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    //BEM Naming Covention
    <div className="app" >
      <h1>WhatsApp</h1>

      <div className="app__body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;