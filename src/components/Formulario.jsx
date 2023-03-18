import React from 'react'
import {useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente}) => {

  const [nombre, setNombre] = useState('')
  const [responsable, setResponsable] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setResponsable(paciente.responsable)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if([nombre, responsable, email, fecha, sintomas].includes('')){
      console.log('hay al menos un campo vacio')
      setError(true)
      return 
    }
    setError(false)

    const objetoPaciente = {
      nombre, responsable, email, fecha, sintomas, id: generarId()
    }
    
    setPacientes([...pacientes, objetoPaciente])
    //reiniciar form
    setNombre('')
    setResponsable('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade al Paciente y {''}
        <span className='text-indigo-600 font-bold '>Administralo</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        {error && <Error><p>'Todos los campos son obligatorios'</p></Error>}

        <div className='mb-5'>
          <label htmlFor="criatura" className='block text-graay-700 uppercase font-bold'>
            Nombre de la Criatura: {}
            </label>
          <input  id='criatura' type="text" placeholder='Nombre completo'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={nombre}
                  onChange={(e)=> setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="responsable" className='block text-graay-700 uppercase font-bold'>
            Nombre del Responsable
            </label>
          <input id='responsable' type="text" placeholder='Nombre del responsable'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={responsable}
                  onChange={(e)=> setResponsable(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-graay-700 uppercase font-bold'>
            E-Mail
            </label>
          <input id='email' type="email" placeholder='escriba su e-mail para contactarlo'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-graay-700 uppercase font-bold'>
            Alta
            </label>
          <input  id='alta' type="date"
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={fecha}
                  onChange={(e)=> setFecha(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-graay-700 uppercase font-bold'>
            Sintomas
            </label>
          <textarea name="" id="sintomas" cols="30" rows="10"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Describa los sintomas'
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}></textarea>
        </div>
        <input type="submit" 
          className="bg-indigo-600 w-full p-3 text-white
          uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" 
          value="Agregar Paciente" />
      </form>

    </div>
  )
}

export default Formulario