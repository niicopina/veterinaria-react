import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade al Paciente y {''}
        <span className='text-indigo-600 font-bold '>Administralo</span>
      </p>
      <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor="criatura" className='block text-graay-700 uppercase font-bold'>
            Nombre de la Criatura
            </label>
          <input id='criatura' type="text" placeholder='Nombre completo'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor="responsable" className='block text-graay-700 uppercase font-bold'>
            Nombre del Responsable
            </label>
          <input id='responsable' type="text" placeholder='Nombre del responsable'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-graay-700 uppercase font-bold'>
            E-Mail
            </label>
          <input id='email' type="email" placeholder='escriba su e-mail para contactarlo'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-graay-700 uppercase font-bold'>
            Alta
            </label>
          <input id='alta' type="date"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-graay-700 uppercase font-bold'>
            Sintomas
            </label>
          <textarea name="" id="sintomas" cols="30" rows="10"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          placeholder='Describa los sintomas'></textarea>
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