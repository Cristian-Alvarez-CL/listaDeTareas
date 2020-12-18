import React from "react";
import {useState} from "react";
import DespliegeTarea from "./component/DespliegeTarea";
import Formulario from "./component/Formulario";

// Import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import JS bootstrap jquery and popper.js
import "bootstrap";
import "../styles/App.css";

function App() {
  const [state, setState] = useState([
    {
      text: "Tarea 1",
      estado: false
    }
  ]);

  const agregarTarea = (text) => {
    const newTarea = [...state, { text }];
    setState(newTarea);
  };

  const tareaOk = index => {
    const newTodos = [...state];
    newTodos[index].isCompleted = true;
    setState(newTodos);
  };

  const deleteTarea = (index) => {
    const newTarea = [...state];
    newTarea.splice(index, 1);
    setState(newTarea);
  };

  return (
    <div className="app">
      <div className="container listaCompleta">
        <Formulario agregarTarea={agregarTarea} />
        <br></br>
        {state.map((state, index) => (
          <DespliegeTarea key={index} index={index} state={state} tareaOk = {tareaOk} deleteTarea={deleteTarea} />
        ))}
      </div>
    </div>
  );
}

export default App;
