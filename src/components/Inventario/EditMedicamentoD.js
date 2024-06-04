import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const EditMedicamentoD = () => {
    const [iddepartamento, setIddepartamento] = useState(null);
    const [idmedicamento, setIdmedicamento] = useState(null); // o useState('');
    const [cantidad, setCantidad] = useState(0);
    const [departamentos, setDepartamentos] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${endpoint}/medicamentoD/${id}`, {
                iddepartamento: iddepartamento,
                idmedicamento: idmedicamento,
                cantidad: cantidad
            });
            navigate(`/inventario/${iddepartamento}`);
        } catch (error) {
            console.error("Error updating medicamento:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [medicamentoResponse, departamentosResponse, medicamentosResponse] = await Promise.all([
                    axios.get(`${endpoint}/medicamentoD/${id}`),
                    axios.get(`${endpoint}/departamentos`),
                    axios.get(`${endpoint}/medicamentos`)
                ]);

                // Verificar si los datos están presentes en la respuesta antes de establecer el estado
                if (medicamentoResponse.data) {
                    setIddepartamento(medicamentoResponse.data.data.iddepartamento);
                    setIdmedicamento(medicamentoResponse.data.data.idmedicamento);
                    setCantidad(medicamentoResponse.data.data.cantidad);
                } else {
                    console.error("Unexpected response structure for medicamento:", medicamentoResponse);
                }

                if (departamentosResponse.data) {
                    setDepartamentos(departamentosResponse.data);
                } else {
                    console.error("Unexpected response structure for departamentos:", departamentosResponse);
                }

                if (medicamentosResponse.data) {
                    setMedicamentos(medicamentosResponse.data);
                } else {
                    console.error("Unexpected response structure for medicamentos:", medicamentosResponse);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="container mt-5" style={{ backgroundColor: '#E9ECEF' }}>
            <div className="d-grid gap-2">
                {iddepartamento !== null && (
                    <Link to={`/inventario/${iddepartamento}`} className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Volver</Link>
                )}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#D1D8E0' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4" style={{ color: '#6610f2' }}>Editar medicamento en inventario</h3>
                            <form onSubmit={update}>
                                <div className="mb-3">
                                    <label className="form-label">Departamento</label>
                                    <select
                                        value={iddepartamento || ''}
                                        onChange={(e) => setIddepartamento(e.target.value)}
                                        className="form-control text-center"
                                    >
                                        {departamentos.map(departamento => (
                                            <option key={departamento.id} value={departamento.id}>
                                                {departamento.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Medicamento</label>
                                    <select
                                        value={idmedicamento}
                                        onChange={(e) => setIdmedicamento(e.target.value)}
                                        className="form-control text-center"
                                    >
                                        {medicamentos.map(medicamento => (
                                            <option key={medicamento.id} value={medicamento.id}>
                                                {medicamento.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Cantidad</label>
                                    <input
                                        value={cantidad}
                                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                                        type="number"
                                        className="form-control text-center"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Actualizar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditMedicamentoD;
