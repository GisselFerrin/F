
import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Lista from './Components/Lista'
import Solicitud from './Components/Solicitud'
import Header from './Components/Header/header'


function App() {
  const [laSolicitud, setLaSolicitud] = useState()


  function handleSubmit(solicitud) {
    setLaSolicitud(solicitud)
  }
  function handleDelete(){
    setLaSolicitud();
  }
  

  return (
    <>
    <Header />
  
    <Formulario onSolicitud={handleSubmit}/>
    <Lista />
    {laSolicitud ? <Solicitud onDelete={handleDelete}>{laSolicitud}</Solicitud>: 'Ingrese aquí su solicitud'}
    
    </>
  )
}

export default App
