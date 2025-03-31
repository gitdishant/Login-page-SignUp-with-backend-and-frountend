import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignupPage from './components/Signup';
import Home from './components/Home';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignupPage' element={<SignupPage/>}/>
      </Routes>
    </Router>
  )
};
export default App