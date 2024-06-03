import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const endpoint = 'http://localhost:8000/api/users/';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                setUser({
                    name: response.data.data.name,
                    lastname: response.data.data.lastname,
                    email: response.data.data.email,
                    password: ''
                });
            } catch (err) {
                setError('Error al cargar los datos del usuario');
            }
        };
        getUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${endpoint}${id}`, user);
            if (response.data.status) {
                navigate('/dashboard'); // Redirige a la página principal después de actualizar
            } else {
                setError(response.data.errors.join(', '));
            }
        } catch (err) {
            const errorMessage = err.response?.data?.errors ? err.response.data.errors.join(', ') : 'Error al actualizar el usuario';
            setError(errorMessage);
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 w-100" style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h2 className="text-center mb-4">Editar Usuario</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastname">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            value={user.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
