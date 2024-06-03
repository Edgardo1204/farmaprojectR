import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowMedicamentos from './components/Medicamento/ShowMedicamentos';
import CreateMedicamento from './components/Medicamento/CreateMedicamento';
import EditMedicamento from './components/Medicamento/EditMedicamento';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowMedicamentos />} />
          <Route path='/create' element={<CreateMedicamento/>} />
          <Route path='/edit' element={<EditMedicamento/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
