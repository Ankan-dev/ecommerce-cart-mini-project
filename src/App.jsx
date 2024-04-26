import React from 'react'
import Header from './Components/Header'
import { Home } from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CartDetails from "./Components/CartDetails"
import { Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      
    </>
  )
}

export default App