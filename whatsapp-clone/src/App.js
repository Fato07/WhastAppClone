import React from 'react';
import './App.css';
import SideBar from './common/SideBar';

function App() {
  return (
    //BEM Naming Covention
    <div className="app" >
      <h1>WhatsApp</h1>

     <div className="app__body">
       <SideBar/>
       {}
     </div>
    </div>
    );
}

export default App;