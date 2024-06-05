import './App.css';
//import './customcss/style.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';
import Login from './components/User/Login';
import AddUser from './components/User/CreateUser';
import EditUser from './components/User/EditUser';

import ShowDepartamentos from './components/Departamento/showDepartamentos';
import CreateDepartamento from './components/Departamento/createDepartamento';
import EditDepartamento from './components/Departamento/editDepartamento';

import ShowInventario from './components/Inventario/ShowMedicamentosD';
import EditMedicamentoD from './components/Inventario/EditMedicamentoD';
import CreateMedicamentoD from './components/Inventario/CreateMedicamentoD';

import ShowCategorias from './components/Categoria/ShowCategorias';
import CreateCategoria from './components/Categoria/CreateCategoria';
import EditCategoria from './components/Categoria/EditCategoria';

import ShowProveedores from './components/Proveedores/ShowProveedores';
import CreateProveedor from './components/Proveedores/CreateProveedor';
import EditProveedor from './components/Proveedores/EditProveedor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path="/nuevo-usuario" element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />

          <Route path='/medicamentos' element={<ShowMedicamentos />} />
          <Route path='/createmedicamento' element={<CreateMedicamento />} />
          <Route path='/editmedicamento/:id' element={<EditMedicamento />} />

          <Route path='/departamentos' element={<ShowDepartamentos />} />
          <Route path='/createDepartamento' element={<CreateDepartamento />} />
          <Route path='/editDepartamento/:id' element={<EditDepartamento />} />

          <Route path='/inventario/:id' element={<ShowInventario />} />
          <Route path='/editMedicamentoD/:id' element={<EditMedicamentoD />} />
          <Route path='/createMedicamentoD/:id' element={<CreateMedicamentoD />} />

          <Route path='/categorias' element={<ShowCategorias />} />
          <Route path='/createCategoria' element={<CreateCategoria />} />
          <Route path='/editCategoria/:id' element={<EditCategoria />} />

          <Route path='/proveedores' element={<ShowProveedores />} />
          <Route path='/createProveedor' element={<CreateProveedor />} />
          <Route path='/editProveedor/:id' element={<EditProveedor />} />

          

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
