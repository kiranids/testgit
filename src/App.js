import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home/Home'
import Navbar from './Component/Navigation/Navbar'
import Portfolio from './Pages/Portfolio';
import Login from './Pages/Login/Login';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path="*" element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
