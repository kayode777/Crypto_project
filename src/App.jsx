import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import coin from './pages/Coin/coin';

const App = () => {
  return ( 
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin:coinID' element={<coin/>}/>
      </Routes>
    

    </div>
   );
}
 
export default App;