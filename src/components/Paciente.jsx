import React from 'react'

const Paciente = () => {
  return (
    <div className='w-1/2 lg:w-3/5'>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
              <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Willy Mojado</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Responsable: {''}
                <span className="font-normal normal-case">Godines</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">E-Mail: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">17 Marzo 2023</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Willy MojadoWilly MojadoWilly MojadoWilly MojadoWilly Mojado
                Willy MojadoWilly MojadoWilly MojadoWilly MojadoWilly MojadoWilly Mojado</span>
              </p>
            </div>
        </div>
  )
}

export default Paciente