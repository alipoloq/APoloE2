/*Importar módulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaDePacientes from "./components/ListaDePacientes"
/*Funcion creadora de la aplicación*/
function App() {
  /*estado de retorno constante*/
  return (
    /*Etiqueta padre y el body de la página*/
    <>
     <Header/>
     <Formulario/>
     <ListaDePacientes/>
    </>
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default App