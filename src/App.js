// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
