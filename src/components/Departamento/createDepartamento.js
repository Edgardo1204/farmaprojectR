import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/departamento';

const CreateDepartamento = () => {
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            nombre: nombre,
            ubicacion: ubicacion,
        })
        navigate('/departamentos');
    };

    return (
        <div className="container mt-3" style={{ maxWidth: '600px' }}>
            <div className="d-grid gap-2">
                <Link to="/departamentos" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }}>Volver</Link>
            </div>
            <h3 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Registrar nuevo departamento</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del departamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Descripción</label>
                    <input
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        className="form-control"
                        placeholder="Ingrese la ubicacion del departamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#6A5ACD', border: 'none' }}>Registrar</button>
            </form>
        </div>
    )
}

export default CreateDepartamento;