import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/medicamento/'

const EditMedicamento = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechavencimiento, setFechavencimiento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState(0);
    const [laboratorio, setLaboratorio] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            descripcion: descripcion,
            fechavencimiento: fechavencimiento,
            categoria: categoria,
            precio: precio,
            laboratorio: laboratorio
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getMedicamentoId = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setDescripcion(response.data.descripcion)
            setFechavencimiento(response.data.fechavencimiento)
            setCategoria(response.data.categoria)
            setPrecio(response.data.precio)
            setLaboratorio(response.data.laboratorio)
        }
        getMedicamentoId()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Editar medicamento</h3>
        <form onSubmit={update}>
                <div className="mb-2">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="form-control"
                        rows="2"
                        placeholder="Ingrese una descripción del medicamento"
                    ></textarea>
                </div>

                <div className="mb-2">
                    <label className="form-label">Fecha de vencimiento</label>
                    <input
                        value={fechavencimiento}
                        onChange={(e) => setFechavencimiento(e.target.value)}
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Categoría</label>
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la categoría del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el precio del medicamento"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Laboratorio</label>
                    <input
                        value={laboratorio}
                        onChange={(e) => setLaboratorio(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre del laboratorio"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Actualizar</button>
            </form>
    </div>
    )
}

export default EditMedicamento
