import React, { useState } from 'react';
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
import KelasComp from './Component/Class/Hooks/Class/KelasComp';
import HooksComp from './Component/Class/Hooks/Fungsional/HooksComp';
import HooksUseEffects from './Component/Class/Hooks/Fungsional/HooksUseEffects';
import { CartContext } from './CardContext';
import Produk from './Component/Class/Produk';


//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {

  const[value, setValue] = useState(0)

  return (
  
    <BrowserRouter>
    <NavbarComp/>
   
   
   <switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/about" component={About}/>
     <Route exact path="/mahasiswa" component={ListComp}/>
     <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
     <Route exact path="/mahasiswa/edit" component={EditComp} />
     <Route exact path="/kelas" component={KelasComp} />
     <Route exact path="/hooks" component={HooksComp} />
     <Route exact path="/useeffects" component={HooksUseEffects} />
     
     {/* <Route exact path="/detail/:id" component={DetailComp}/>*/}
     <CartContext.Provider value={{value, setValue}}> 

     <NavbarComp/>
     <switch>
     <Route exact path="/" component={HomePage} />
       <Route exact path="/about" component={About} />
       <Route exact path="/mahasiswa" component={ListComp} />
       <Route exact path="/mahasiswa/tambah" component={TambahComp} />
       <Route exact path="/mahasiswa/edit" component={EditComp} />
       <Route exact path="/kelas" component={KelasComp} />
       <Route exact path="/hooks" component={HooksComp} />
       <Route exact path="/useeffects" component={HooksUseEffects} />
       <Route exact path="/produk" component={Produk} />
     </switch>

      {/* <Route exact path="/detail/:id" component={DetailComp}/>*/}
    
     </CartContext.Provider>
    </switch>
        </BrowserRouter>



  );
}

export default App;
