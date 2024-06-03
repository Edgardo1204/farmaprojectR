import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowMedicamentos = () => {
    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        getAllMedicamentos();
    }, []);

    const getAllMedicamentos = async () => {
        try {
            const response = await axios.get(`${endpoint}/medicamentos`);
            setMedicamentos(response.data);
        } catch (error) {
            console.error('Error fetching medicamentos:', error);
        }
    };

    const deleteMedicamento = async (id) => {
        try {
            await axios.delete(`${endpoint}/medicamento/${id}`);
            getAllMedicamentos();
        } catch (error) {
            console.error('Error deleting medicamento:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{ color: '#7e549f' }}>Medicamentos</h2>
            <div className="d-grid gap-2">
                <Link to="/create" className="btn btn-success btn-lg mb-4" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Registrar nuevo medicamento</Link>
            </div>
            <table className="table table-striped" style={{ backgroundColor: '#fbe7f2' }}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha de vencimiento</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Laboratorio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {medicamentos.map((medicamento) => (
                        <tr key={medicamento.id}>
                            <td>{medicamento.nombre}</td>
                            <td>{medicamento.descripcion}</td>
                            <td>{medicamento.fechavencimiento}</td>
                            <td>{medicamento.categoria}</td>
                            <td>{medicamento.precio}</td>
                            <td>{medicamento.laboratorio}</td>
                            <td>
                                <Link to={`/edit/${medicamento.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#fcad65', borderColor: '#fcad65' }}>Editar</Link>
                                <button onClick={() => deleteMedicamento(medicamento.id)} className="btn btn-danger" style={{ backgroundColor: '#f58a8a', borderColor: '#f58a8a' }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowMedicamentos;
