import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const endpoint = 'http://localhost:8000/api/medicamento';

const CreateMedicamento = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechavencimiento, setFechavencimiento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState(0);
    const [laboratorio, setLaboratorio] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
            await axios.post(endpoint, {
                nombre: nombre,
                descripcion: descripcion,
                fechavencimiento: fechavencimiento,
                categoria: categoria,
                precio: precio,
                laboratorio: laboratorio
            })
            navigate('/');
    };

    return (
        <div className="container mt-3" style={{ maxWidth: '600px' }}>
            <h3>Registrar nuevo medicamento</h3>
            <form onSubmit={store}>
                <div className="mb-2">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="form-control"
                        rows="2"
                        placeholder="Ingrese una descripción del medicamento"
                    ></textarea>
                </div>

                <div className="mb-2">
                    <label className="form-label">Fecha de vencimiento</label>
                    <input
                        value={fechavencimiento}
                        onChange={(e) => setFechavencimiento(e.target.value)}
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Categoría</label>
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la categoría del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el precio del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Laboratorio</label>
                    <input
                        value={laboratorio}
                        onChange={(e) => setLaboratorio(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del laboratorio"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
        </div>
    )
}

export default CreateMedicamento;
