import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowMedicamentosD = () => {
    const [medicamentosD, setMedicamentosD] = useState([]);
    const [nombreDepartamento, setNombreDepartamento] = useState('');
    const [idDepartamento, setIdDepartamento] = useState('');

    const { id } = useParams();

    useEffect(() => {

        const getDepartamento = async () => {
            try {
                const response = await axios.get(`${endpoint}/departamento/${id}`);
                setNombreDepartamento(response.data.data.nombre);
                setIdDepartamento(response.data.data.id);
            } catch (error) {
                console.error("Error fetching departamento:", error);
            }
        };

        getMedicamentosD();
        getDepartamento();
    }, [id]);

    const getMedicamentosD = async () => {
        try {
            const response = await axios.get(`${endpoint}/medicamentosD?iddepartamento=${id}`);
            const medicamentosConNombre = response.data.map(async (medicamento) => {
                const medicamentoInfo = await axios.get(`${endpoint}/medicamento/${medicamento.idmedicamento}`);
                return {
                    id: medicamento.id,
                    nombre: medicamentoInfo.data.data.nombre,
                    cantidad: medicamento.cantidad
                };
            });
            Promise.all(medicamentosConNombre).then((medicamentos) => {
                setMedicamentosD(medicamentos);
            });
        } catch (error) {
            console.error("Error fetching medicamentos:", error);
        }
    };

    const deleteMedicamentoD = async (id) => {
        try {
            await axios.delete(`${endpoint}/medicamentoD/${id}`);
            getMedicamentosD();
        } catch (error) {
            console.error('Error deleting medicamentoD:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-grid gap-2">
                <Link to="/departamentos" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Volver</Link>
            </div>
            <h1 className="mb-4" style={{ color: '#7e549f' }}>{nombreDepartamento}</h1>
            <h2 className="mb-4" style={{ color: '#7e549f' }}>Inventario</h2>
            <div className="d-grid gap-2">
                <Link to={`/createMedicamentoD/${idDepartamento}`} className="btn btn-success btn-lg mb-4" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Agregar otro medicamento</Link>
            </div>
            <table className="table table-striped" style={{ backgroundColor: '#fbe7f2' }}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Medicamento</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {medicamentosD.map((medicamentoD) => (
                        <tr key={medicamentoD.id}>
                            <td>{medicamentoD.nombre}</td>
                            <td>{medicamentoD.cantidad}</td>
                            <td>
                                <Link to={`/editMedicamentoD/${medicamentoD.id}`} className="btn btn-warning me-2" style={{ backgroundColor: '#fcad65', borderColor: '#fcad65' }}>Editar</Link>
                                <button onClick={() => deleteMedicamentoD(medicamentoD.id)} className="btn btn-danger" style={{ backgroundColor: '#f58a8a', borderColor: '#f58a8a' }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowMedicamentosD;
