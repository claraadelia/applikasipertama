import React from 'react';
import BoostrapComp from './Component/Class/BoostrapComp';
import Home from './Component/Fungsional/Home';
import Login from './Component/Class/Login';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
       <BoostrapComp/>
    </div>
  );
}

export default App;
