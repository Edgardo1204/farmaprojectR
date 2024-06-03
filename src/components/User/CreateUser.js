import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/auth/register'; // Actualiza el endpoint según sea necesario

const AddUser = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(endpoint, { name, lastname, email, password });
            navigate('/users'); // Redirige a la lista de usuarios después de agregar uno nuevo
        } catch (err) {
            setError('Error al agregar el usuario, por favor intenta de nuevo.');
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 w-100" style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h2 className="text-center mb-4">Agregar Usuario</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleAddUser}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastname">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Agregar Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
