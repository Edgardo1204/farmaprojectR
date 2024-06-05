import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowProveedores = () => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        getAllProveedores();
    }, []);

    const getAllProveedores = async () => {
        try {
            const response = await axios.get(`${endpoint}/proveedores`);
            setProveedores(response.data);
        } catch (error) {
            console.error('Error fetching proveedores:', error);
        }
    };

    const deleteProveedor = async (id) => {
        try {
            await axios.delete(`${endpoint}/proveedor/${id}`);
            getAllProveedores();
        } catch (error) {
            console.error('Error deleting proveedor:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#7e549f' }}>Proveedores</h2>
            <div className="d-grid gap-2">
                <Link to="/createProveedor" className="btn btn-success btn-lg mb-4" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Registrar nuevo proveedor</Link>
            </div>
            <table className="table table-striped" style={{ backgroundColor: '#fbe7f2' }}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>No. Telefonico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.apellidos}</td>
                            <td>{proveedor.telefono}</td>
                            <td>
                                <Link to={`/editProveedor/${proveedor.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#fcad65', borderColor: '#fcad65' }}>Editar</Link>
                                <button onClick={() => deleteProveedor(proveedor.id)} className="btn btn-danger" style={{ backgroundColor: '#f58a8a', borderColor: '#f58a8a' }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProveedores;