import React from 'react'
import Paciente from './Paciente'
Paciente
const ListadoPacientes = ({pacientes}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
           {pacientes && pacientes.length ? (
            <>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">Administra tus
                    <span className='text-indigo-600 font-bold'> pacientes y citas</span>
                  </p>
      
                  {pacientes.map(paciente =>(
                    <Paciente 
                      key={paciente.id}
                      paciente={paciente}/>
                  ))} 
              </>
           ) : (
                <>
                  <h2 className='font-black text-3xl text-center'>Aún no hay pacientes</h2>
                                  <p className="text-xl mt-5 mb-10 text-center">Administralos aquí
                                    <span className='text-indigo-600 font-bold'> 
                                     agregandolos en el formulario
                                    </span>
                                  </p>
                </>
           )}
                               
              
        </div>
  )
}

export default ListadoPacientes