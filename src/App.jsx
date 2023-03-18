import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <> 
      <div className='container mx-3 mt-20'>
        <Header />

          <div className="mt-12 md:flex">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
               />

            <ListadoPacientes 
              pacientes={pacientes}
              setPaciente={setPaciente}
            />
          </div>
      </div>
    </>
  )
}

export default App
