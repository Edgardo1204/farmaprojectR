import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';
import 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowMedicamentos />} />
          <Route path='/create' element={<CreateMedicamento />} />
          <Route path='/edit/:id' element={<EditMedicamento />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
