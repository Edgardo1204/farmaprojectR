import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowCategorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getAllCategorias();
    }, []);

    const getAllCategorias = async () => {
        try {
            const response = await axios.get(`${endpoint}/categorias`);
            setCategorias(response.data);
        } catch (error) {
            console.error('Error fetching categorias:', error);
        }
    };

    const deleteCategoria = async (id) => {
        try {
            await axios.delete(`${endpoint}/categoria/${id}`);
            getAllCategorias();
        } catch (error) {
            console.error('Error deleting categoria:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#7e549f' }}>Categorias</h2>
            <div className="d-grid gap-2">
                <Link to="/createCategoria" className="btn btn-success btn-lg mb-4" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Registrar nueva categoria</Link>
            </div>
            <table className="table table-striped" style={{ backgroundColor: '#fbe7f2' }}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.descripcion}</td>
                            <td>
                                <Link to={`/editCategoria/${categoria.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#fcad65', borderColor: '#fcad65' }}>Editar</Link>
                                <button onClick={() => deleteCategoria(categoria.id)} className="btn btn-danger" style={{ backgroundColor: '#f58a8a', borderColor: '#f58a8a' }}>Eliminar</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowCategorias;