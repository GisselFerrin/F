import { useState } from "react"

    const Formulario = (props) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [mensajeError, setMensajeError] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombre.trim() === '' && length>5) {
        setMensajeError('Debe ingresar un nombre')
        }if (apellido.trim()==='' && length>5){
            setMensajeError('Debe ingresar su apellido')
        }if (email.trim()=== ''){
            setMensajeError('Debe colocar aquí su emial')
        } else if (numero <= 0 || isNaN(numero)) {
        setMensajeError('Debe ingresar un número mayor a 0')
        } else {
        props.onSubmit({ nombre, apellido, email, numero })
        setNombre('')
        setApellido('')
        setEmail('')
        setNumero('')
        setMensajeError('')
        }
    }
    
    return (
        <div>
    <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Nombre:
            <input
                type='text'
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            </label>
            <br />
            <label>
            Apellido:
            <input
                type='text'
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
            />
            </label>
            <br/>
            
            <label>
            Email:
            <input
                type='text'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </label>
            <br/>

            <label>
            Número tel:
            <input
                type='number'
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
            />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
        {mensajeError ? <div>{mensajeError}</div> : null}
        </div>
    )
    }
    
export default Formulario