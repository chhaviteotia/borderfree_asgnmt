import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Products from './components/products/Products';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/products' element={<Products />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
