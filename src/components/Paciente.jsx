import React from 'react'

const Paciente = () => {
  return (
   
            <div className="bg-white mx-5 my-10 shadow-md py-10 px-5 mb-10 rounded-xl ">
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
  )
}

export default Paciente