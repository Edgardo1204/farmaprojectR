import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/medicamento';
const categoriesEndpoint = 'http://localhost:8000/api/categorias';

const CreateMedicamento = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechavencimiento, setFechavencimiento] = useState('');
    const [categoria_id, setCategoriaId] = useState('');
    const [precio, setPrecio] = useState(0);
    const [laboratorio, setLaboratorio] = useState('');
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get(categoriesEndpoint);
                setCategorias(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategorias();
    }, []);

    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(endpoint, {
                nombre,
                descripcion,
                fechavencimiento,
                categoria_id,
                precio,
                laboratorio
            });
            navigate('/medicamentos');
        } catch (error) {
            console.error('Error creating medicamento:', error);
        }
    };

    return (
        <div className="container mt-3" style={{ maxWidth: '600px' }}>
            <div className="d-grid gap-2">
                <Link to="/medicamentos" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }}>Volver</Link>
            </div>
            <h3 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Registrar nuevo medicamento</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="form-control"
                        rows="2"
                        placeholder="Ingrese una descripción del medicamento"
                        style={{ textAlign: 'center' }}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Fecha de vencimiento</label>
                    <input
                        value={fechavencimiento}
                        onChange={(e) => setFechavencimiento(e.target.value)}
                        type="date"
                        className="form-control"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Categoría</label>
                    <select
                        value={categoria_id}
                        onChange={(e) => setCategoriaId(e.target.value)}
                        className="form-control"
                        style={{ textAlign: 'center' }}
                    >
                        <option value="">Seleccione una categoría</option>
                        {categorias.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el precio del medicamento"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: '#6A5ACD' }}>Laboratorio</label>
                    <input
                        value={laboratorio}
                        onChange={(e) => setLaboratorio(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del laboratorio"
                        style={{ textAlign: 'center' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#6A5ACD', border: 'none' }}>Registrar</button>
            </form>
        </div>
    );
};

export default CreateMedicamento;
