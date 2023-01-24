import { PureComponent } from "react"
import Pacientes from "./Pacientes"

function ListaDePacientes({pacientes, setPaciente}) {
  //formulas para id unico
  //Date.now().toString(36)
  //Math.random().toString(36).substr(2)
  return (
    <div className='md:w-2/3 lg:w-1/3 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length 
      ?
      <>
        <h2 className='text-green-300 font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">Administra tus {' '}
          <span className="text-cyan-600 font-bold">Pacientes y Citas</span>
        </p>
        { pacientes.map(indice =>
          <Pacientes
            key = {indice.id} 
            indice = {indice}
            setPaciente = {setPaciente}
          />
        )}
      </>
      : 
      <>
        <h2 className='text-green-300 font-black text-3xl text-center'>No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes {' '}
          <span className="text-cyan-600 font-bold">y aparecerán en este espacio</span>
        </p>
      </>
      }
    </div>
  )
}

export default ListaDePacientes