import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/proveedor';

const CreateProveedor = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            nombre: nombre,
            apellidos: apellidos,
            telefono: telefono,
        })
        navigate('/proveedores');
    };

    return (
        <div className="container mt-3" style={{ maxWidth: '600px' }}>
            <div className="d-grid gap-2">
                <Link to="/proveedores" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }}>Volver</Link>
            </div>
            <h3 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Registrar nuevo proveedor</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del proveedor"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Apellidos</label>
                    <input
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                        className="form-control"
                        placeholder="Ingrese los apellidos del proveedor"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>No. Telefonico</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="form-control"
                        placeholder="Ingrese el telefono del proveedor"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#6A5ACD', border: 'none' }}>Registrar</button>
            </form>
        </div>
    )
}

export default CreateProveedor;