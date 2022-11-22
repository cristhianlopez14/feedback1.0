import { useState } from "react"
//Data
import Resenias from "./data/Resenias.js"
import Header from "./componentes/Header.jsx"
import Resenia from "./componentes/Resenia.jsx"
import ReseniaList from "./componentes/ReseniaList.jsx"

function  App (){

  //Crear el estado para el arreglo de resenias
  const [lista_resenias, setListaResenias] = useState(Resenias)
 
  return(
      <div className="container">
          <ReseniaList listaresenias={lista_resenias}/>
      </div>
  )
}

export default App