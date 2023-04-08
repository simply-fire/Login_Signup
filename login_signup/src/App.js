
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import Lspage from './components/Cp-set-1/Lspage';
import Spage from './components/Cp-set-1/Spage';
import Otp from './components/Cp-set-1/Otp'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lspage />} />
          <Route path="/Lspage" element={<Lspage />} />
          <Route path='/Spage' element={<Spage />} />
          <Route path="/Otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
