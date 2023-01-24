/*Importar módulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaDePacientes from "./components/ListaDePacientes"
import Pacientes from "./components/Pacientes"
import { useState } from "react"

Pacientes/*Funcion creadora de la aplicación*/
function App() {
  /*estado de retorno constante*/
  /*Podemos crear funciones antes del return*/
  const [pacientes, setPacientes] = useState([]);
  //extraer valores con la tarjeta para editar y eliminar
  const [paciente, setPaciente] = useState({});

  return (
    /*Etiqueta padre y el body de la página*/
    /*Fragments*/
    <div className="container mx-auto mt-20">
     <Header/>
     <div className="mt-12 md:flex">
       <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
       />
       <ListaDePacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
       />
     </div> 
    </div>
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default App
