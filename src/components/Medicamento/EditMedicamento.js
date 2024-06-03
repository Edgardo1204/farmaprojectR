import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/medicamento/';

const EditMedicamento = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechavencimiento, setFechavencimiento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState(0);
    const [laboratorio, setLaboratorio] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${endpoint}${id}`, {
                nombre: nombre,
                descripcion: descripcion,
                fechavencimiento: fechavencimiento,
                categoria: categoria,
                precio: precio,
                laboratorio: laboratorio
            });
            navigate('/medicamentos');
        } catch (error) {
            console.error("Error updating medicamento:", error);
        }
    };

    useEffect(() => {
        const getMedicamentoId = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                setNombre(response.data.data.nombre);
                setDescripcion(response.data.data.descripcion);
                setFechavencimiento(response.data.data.fechavencimiento);
                setCategoria(response.data.data.categoria);
                setPrecio(response.data.data.precio);
                setLaboratorio(response.data.data.laboratorio);
            } catch (error) {
                console.error("Error fetching medicamento:", error);
            }
        };
        getMedicamentoId();
    }, [id]);

    return (
        <div className="container mt-5" style={{ backgroundColor: '#E9ECEF' }}>
            <div className="d-grid gap-2">
                <Link to="/medicamentos" className="btn btn-success btn-sm position-absolute top-0 end-0 m-2" style={{ backgroundColor: '#f6a8c9', borderColor: '#f6a8c9' }}>Volver</Link>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{ backgroundColor: '#D1D8E0' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4" style={{ color: '#6610f2' }}>Editar medicamento</h3>
                            <form onSubmit={update}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        type="text"
                                        className="form-control text-center" // Añadido text-center aquí
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        className="form-control text-center" // Añadido text-center aquí
                                        rows="2"
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Fecha de vencimiento</label>
                                    <input
                                        value={fechavencimiento}
                                        onChange={(e) => setFechavencimiento(e.target.value)}
                                        type="date"
                                        className="form-control text-center" // Añadido text-center aquí
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Categoría</label>
                                    <input
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                        type="text"
                                        className="form-control text-center" // Añadido text-center aquí
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Precio</label>
                                    <input
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        type="number"
                                        className="form-control text-center" // Añadido text-center aquí
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Laboratorio</label>
                                    <input
                                        value={laboratorio}
                                        onChange={(e) => setLaboratorio(e.target.value)}
                                        type="text"
                                        className="form-control text-center" // Añadido text-center aquí
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

export default EditMedicamento;
