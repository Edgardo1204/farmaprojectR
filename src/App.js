import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<ShowMedicamentos />} />
          <Route path='/create' element={<CreateMedicamento/>} />
          <Route path='/edit' element={<EditMedicamento/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
