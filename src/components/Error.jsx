import React from 'react'
import {useState, useEffect} from 'react'

const Error = () => {
  return (
        <div className='bg-red-600 text-white text-center 
                        p-3 uppercase font-bold mb-3 rounded-md'>
          <p>Todos los campos son obligatorios</p>
        </div>
  )
}

export default Error