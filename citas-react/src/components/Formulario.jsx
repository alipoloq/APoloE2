import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  
  //setNombre('Kathia');

  //console.log(nombre);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento a Pacientes{' '}
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes{' '}
        <span className="text-violet-400 font-bold">Administralos</span>
      </p>
      <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota:</label>
          <input id="mascota" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre de la mascota" value={nombre} 
          onChange={(e)=>console.log(setNombre(e.target.value))}/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario:</label>
          <input id="propietario" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre del propietario" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Propietario:</label>
          <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Email Propietario" />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha de Ingreso</label>
          <input id="fecha" type="date" className="border-2 w-full p-2 mt-2 rounded-md" />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 placeholder-gray-800 mt-2 rounded-md" placeholder="Describe los síntomas"/>
        </div>
        <input type="submit" value="Agregar Mascota" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 
        cursor-pointer transition-colors"/>
      </form>
    </div>
  )
}

export default Formulario