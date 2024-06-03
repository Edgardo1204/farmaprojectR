import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowDepartamentos = () => {
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        getAllDepartamentos();
    }, []);

    const getAllDepartamentos = async () => {
        try {
            const response = await axios.get(`${endpoint}/departamentos`);
            setDepartamentos(response.data);
        } catch (error) {
            console.error('Error fetching departamentos:', error);
        }
    };

    const deleteDepartamento = async (id) => {
        try {
            await axios.delete(`${endpoint}/departamento/${id}`);
            getAllDepartamentos();
        } catch (error) {
            console.error('Error deleting departamento:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#7e549f' }}>Departamentos</h2>
            <div className="d-grid gap-2">
                <Link to="/createDepartamento" className="btn btn-success btn-lg mb-4" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Registrar nuevo departamento</Link>
            </div>
            <table className="table table-striped" style={{ backgroundColor: '#fbe7f2' }}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Edición</th>
                        <th>Inventario</th>
                    </tr>
                </thead>
                <tbody>
                    {departamentos.map((departamento) => (
                        <tr key={departamento.id}>
                            <td>{departamento.nombre}</td>
                            <td>{departamento.ubicacion}</td>
                            <td>
                                <Link to={`/editDepartamento/${departamento.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#fcad65', borderColor: '#fcad65' }}>Editar</Link>
                                <button onClick={() => deleteDepartamento(departamento.id)} className="btn btn-danger" style={{ backgroundColor: '#f58a8a', borderColor: '#f58a8a' }}>Eliminar</button>

                            </td>
                            <td>
                                <Link to={`/inventario/${departamento.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Ver</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowDepartamentos;