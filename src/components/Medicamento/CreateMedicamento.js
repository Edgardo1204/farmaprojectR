import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
            <div className="d-grid gap-2">
                <Link to="/medicamentos" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }}>Volver</Link>
            </div>
            <h3 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Registrar nuevo medicamento</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="form-control"
                        rows="2"
                        placeholder="Ingrese una descripción del medicamento"
                        style={{ textAlign: 'center' }}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Fecha de vencimiento</label>
                    <input
                        value={fechavencimiento}
                        onChange={(e) => setFechavencimiento(e.target.value)}
                        type="date"
                        className="form-control"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Categoría</label>
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la categoría del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el precio del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Laboratorio</label>
                    <input
                        value={laboratorio}
                        onChange={(e) => setLaboratorio(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del laboratorio"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#6A5ACD', border: 'none' }}>Registrar</button>
            </form>
        </div>
    )
}

export default CreateMedicamento;