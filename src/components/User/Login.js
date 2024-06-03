import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/auth/login'; // Actualiza el endpoint según sea necesario

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(endpoint, { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/show-medicamentos'); // Redirige a la página principal después del login
        } catch (err) {
            setError('Credenciales incorrectas, por favor intenta de nuevo.');
        }
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 w-100" style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <Link to="/nuevo-usuario">Registrarse</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
