import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowMedicamentos = () => {
    const [medicamentos, setMedicamentos] = useState([])

    useEffect(() => {
        getAllMedicamentos()
    }, [])

    const getAllMedicamentos = async () => {
        const response = await axios.get(`${endpoint}/medicamentos`)
        setMedicamentos(response.data)
    }

    const deleteMedicamento = async (id) => {
        await axios.delete(`${endpoint}/medicamento/${id}`)
        getAllMedicamentos()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <h2>Medicamentos</h2>
                
                <div className='d-grid gap-2'>
                    <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</Link>
                </div>

                <br></br>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha de vencimiento</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Laboratorio</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {medicamentos.map((medicamento) => (
                        <tr key={medicamento.id}>
                            <td> {medicamento.nombre} </td>
                            <td> {medicamento.descripcion} </td>
                            <td> {medicamento.fechavencimiento} </td>
                            <td> {medicamento.categoria} </td>
                            <td> {medicamento.precio} </td>
                            <td> {medicamento.laboratorio} </td>
                            <td>
                                <Link to={`/edit/${medicamento.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteMedicamento(medicamento.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowMedicamentos