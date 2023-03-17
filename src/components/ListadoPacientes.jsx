import React from 'react'
import Paciente from './Paciente'
Paciente
const ListadoPacientes = () => {
  return (
    <>
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra
              <span className='text-indigo-600 font-bold'>pacientes y citas</span>
            </p>
            <Paciente />
        </div>
    </>
  )
}

export default ListadoPacientes