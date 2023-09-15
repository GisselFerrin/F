import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [submitted, setSubmitted] = useState()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!name || !email){
      setError('Porfavor complete todos los campos')
      return
    }

    if(name.length < 5){
      setError('El nombre debe ser mayor a 5 caracteres')
      return
    }

    if(!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
      setError('Profavor ingrese un email valido')
      return
    }

    const userContact = {
      name: name,
      email: email
    }

    setError('')
    setName('')
    setEmail('')
    setSubmitted(userContact)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submitted && <p className="submitted">{`Gracias ${submitted.name}, te contactaremos en las proximas 24 hs, vía mail`}</p>}
    </div>
  );
};

export default Form;
