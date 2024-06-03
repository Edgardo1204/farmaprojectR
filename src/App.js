import './App.css';
//import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';
import Login from './components/User/Login';
import AddUser from './components/User/CreateUser';
import EditUser from './components/User/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/show-medicamentos' element={<ShowMedicamentos />} />
          <Route path='/create' element={<CreateMedicamento />} />
          <Route path='/edit/:id' element={<EditMedicamento />} />
          <Route path='/' element={<Login />} />
          <Route path="/nuevo-usuario" element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
