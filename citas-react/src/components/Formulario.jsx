const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento a Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota:</label>
          <input id="mascota" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre de la mascota" />
        </div>
      </form>
    </div>
  )
}

export default Formulario