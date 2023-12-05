import { useState } from "react";
import Name from "./components/Name";

function App(){
  const [dinamicName, setdinamicName] = useState("Nome dinamico")

  function changeDinamicName(nome){
    setdinamicName(nome)
  }

  return (
    <div>
      <h1>First App</h1>
      <h2>{dinamicName}</h2>
      <button onClick={() => changeDinamicName("Francisco Cardoso")}>Mudar Nome Dinamico</button>
      <br/>
      <Name name="Nome estatico"/>
    </div>
  );
}

export default App