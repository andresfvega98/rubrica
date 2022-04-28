import React from 'react'
import { nanoid } from 'nanoid';

const Formulario = () => {

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [edad, setEdad] = React.useState('')
    const [telefono, setTelefono] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [lista, setLista] = React.useState([])
    const [error, setError] = React.useState(null)

    const guardarDatos = async (e) => {
        e.preventDefault()

        if (!nombre.trim()) {
            setError('Campo nombre vacío')
            return
        }

        if (!apellido.trim()) {
            setError('Campo apellido vacío')
            return
        }

        if (!edad.trim()) {
            setError('Campo edad vacío')
            return
        }

        if (!telefono.trim()) {
            setError('Campo telefono vacío')
            return
        }
        if (!correo.trim()) {
            setError('Campo correo vacío')
            return
        }


        setLista([...lista,
        {id: nanoid(),nombre, apellido, edad, telefono, correo }
        ])
        setNombre("")
        setApellido("")
        setEdad("")
        setTelefono("")
        setCorreo("")
    }

    const eliminar = (id) => {

        const aux = lista.filter(item => item.id !== id)
        setLista(aux)

    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center'>CRUD BÁSICO REACT</h1>
            <hr />
            <div className='row'>
                <div className="col-8">
                    <h4 className="text-center">Listado de nombres</h4>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Acción</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                lista.map((item) => (
                                    <tr >
                                        <td>{item.nombre}</td>
                                        <td>{item.apellido}</td>
                                        <td>{item.edad}</td>
                                        <td>{item.telefono}</td>
                                        <td>{item.correo}</td>

                                        <td>
                                            <button className='btn btn-danger btn-sm float-end mx-2'
                                                onClick={() => eliminar(item.id)}>Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
                <div className="col-4">
                    <h4 className="text-center">
                        Agregar usuario
                    </h4>
                    <form onSubmit={guardarDatos}>
                        {
                            error ? <span className='text-danger'>{error}</span> : null
                        }
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese nombre'
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese apellido'
                            onChange={(e) => setApellido(e.target.value)}
                            value={apellido}
                        />
                        <input
                            className='form-control mb-2'
                            type="number"
                            placeholder='Ingrese edad'
                            onChange={(e) => setEdad(e.target.value)}
                            value={edad}
                        />
                        <input
                            className='form-control mb-2'
                            type="number"
                            placeholder='Ingrese telefono'
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese correo'
                            onChange={(e) => setCorreo(e.target.value)}
                            value={correo}
                        />
                        <button className='btn btn-primary btn-block' type='submit'>Agregar</button>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default Formulario;