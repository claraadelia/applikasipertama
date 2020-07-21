import React from 'react';
//import BoostrapComp from './Component/Class/BoostrapComp';
import Home from './Component/Fungsional/Home';
import Login from './Component/Class/Login';
import NavbarComp from './Component/Fungsional/NavbarComp'
import HomePage from './Component/Fungsional/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Component/Fungsional/AboutComp';
import CardComp from './Component/Fungsional/CardComp'
import DetailComp from './Component/Fungsional/DetailComp';

//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
      <Home/>
      <Login/>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/detail/:id" component={DetailComp}/>
        </switch>
    </BrowserRouter>
      
      
    
  );
}

export default App;
