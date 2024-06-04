import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';
const agregarUrl = `${endpoint}/medicamentoD`; // URL para agregar un nuevo medicamento

const CreateMedicamentoD = () => {
    const [iddepartamento, setIddepartamento] = useState(null);
    const [idmedicamento, setIdmedicamento] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [medicamentos, setMedicamentos] = useState([]);
    const [departamentoNombre, setDepartamentoNombre] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchMedicamentos = async () => {
            try {
                const response = await axios.get(`${endpoint}/medicamentos`);
                if (response.data) {
                    setMedicamentos(response.data);
                }
            } catch (error) {
                console.error("Error fetching medicamentos:", error);
            }
        };

        const fetchDepartamento = async () => {
            try {
                const response = await axios.get(`${endpoint}/departamento/${id}`);
                if (response.data && response.data.data) {
                    setIddepartamento(response.data.data.id);
                    setDepartamentoNombre(response.data.data.nombre);
                }
            } catch (error) {
                console.error("Error fetching departamento:", error);
            }
        };

        fetchMedicamentos();
        fetchDepartamento();
    }, [id]);

    const store = async (e) => {
        e.preventDefault();
        await axios.post(agregarUrl, { // Utiliza la URL para agregar un nuevo medicamento
            iddepartamento: iddepartamento,
            idmedicamento: idmedicamento,
            cantidad: cantidad,
        })
        navigate(`/inventario/${id}`);
    };

    return (
        <div className="container mt-3" style={{ maxWidth: '600px' }}>
            <div className="d-grid gap-2">
                <Link to={`/inventario/${id}`} className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }}>Volver</Link>
            </div>
            <h3 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Registrar nuevo departamento</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Departamento</label>
                    <input
                        value={departamentoNombre}
                        type="text"
                        className="form-control"
                        style={{ textAlign: 'center' }}
                        readOnly
                    />
                    <input
                        type="hidden"
                        value={id}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Medicamento</label>
                    <select
                        value={idmedicamento}
                        onChange={(e) => setIdmedicamento(e.target.value)}
                        className="form-control text-center"
                    >
                        <option value="">Seleccione el nombre del medicamento</option>
                        {medicamentos.map(medicamento => (
                            <option key={medicamento.id} value={medicamento.id}>
                                {medicamento.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Cantidad</label>
                    <input
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        className="form-control"
                        placeholder="Ingrese la cantidad del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#6A5ACD', border: 'none' }}>Registrar</button>
            </form>
        </div>
    )
}

export default CreateMedicamentoD;
