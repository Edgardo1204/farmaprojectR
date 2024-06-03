import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShowMedicamentos from './components/ShowMedicamentos';
import CreateMedicamento from './components/CreateMedicamento';
// import EditMedicamento from './components/EditMedicamento';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicamentos" element={<ShowMedicamentos />} />
          <Route path="/medicamentos/create" element={<CreateMedicamento />} />
          {/* <Route path="/medicamentos/edit/:id" element={<EditMedicamento />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
