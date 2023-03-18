import React from 'react'

const Paciente = ({paciente}) => {
    const {nombre, responsable, email, fecha, sintomas} = paciente

  return (   
            <div className="bg-white mx-5 my-10 shadow-md py-10 px-5 mb-10 rounded-xl ">
              <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Responsable: {''}
                <span className="font-normal normal-case">{responsable}</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">E-Mail: {''}
                <span className="font-normal normal-case">{email}</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
              </p>
            </div>
  )
}

export default Paciente