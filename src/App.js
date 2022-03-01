import React from 'react';
import './App.css';
import Feed from './features/Feed/Feed';
import Header from './features/Header/Header';
import SideBar from './features/SideBar/SideBar';


function App() {
  return (
    <div className="app">
      {/*HEADER*/}
        <Header />
      {/* APP BODY  */}
      {/* SIDEBAR */}
      <div className='app__body'>
        <SideBar /> 
       <Feed />
      </div>
      
      {/* FEED */}
      
      {/* WIDGETS(RIGHT BAR) */}
    </div>
  );
}

export default App;
