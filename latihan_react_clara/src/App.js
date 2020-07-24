import React from 'react';
//import BoostrapComp from './Component/Class/BoostrapComp';
import Home from './Component/Fungsional/Home';
import Login from './Component/Class/Login';
import NavbarComp from './Component/Fungsional/NavbarComp'
import HomePage from './Component/Fungsional/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Component/Fungsional/AboutComp';
import CardComp from './Component/Fungsional/CardComp'
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp'
import EditComp from './Component/Class/EditComp';


//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
   

      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/mahasiswa" component={ListComp}/>
        <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
        <Route exact path="/mahasiswa/edit" component={EditComp} />
        {/* <Route exact path="/detail/:id" component={DetailComp}/>*/}
        </switch>
    </BrowserRouter>



  );
}

export default App;
