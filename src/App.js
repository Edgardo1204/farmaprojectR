import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';

import ShowDepartamentos from './components/Departamento/showDepartamentos';
import CreateDepartamento from './components/Departamento/createDepartamento';
import EditDepartamento from './components/Departamento/editDepartamento';

import ShowInventario from './components/Inventario/ShowMedicamentosD';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/medicamentos' element={<ShowMedicamentos />} />
          <Route path='/createmedicamento' element={<CreateMedicamento />} />
          <Route path='/editmedicamento/:id' element={<EditMedicamento />} />

          <Route path='/departamentos' element={<ShowDepartamentos />} />
          <Route path='/createDepartamento' element={<CreateDepartamento />} />
          <Route path='/editDepartamento/:id' element={<EditDepartamento />} />

          <Route path='/inventario/:id' element={<ShowInventario />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
