import './App.css';
//import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowMedicamentos from './components/ShowMedicamentos';
import CreateMedicamento from './components/CreateMedicamento';
//import EditMedicamento from './components/EditMedicamento';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowMedicamentos />} />
          <Route path='/create' element={<CreateMedicamento/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
