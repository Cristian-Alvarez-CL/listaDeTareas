import React from "react";
import {useState} from "react";

// Import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import JS bootstrap jquery and popper.js
import "bootstrap";
import "./styles/App.css";

function DespliegeTarea({ todo, index, deleteTarea }) {
  return (
    <div className="todo">
      {todo.text}
      <div>
        <button
          type="button"
          className="btn-close btn-close-black"
          aria-label="Close"
          onClick={() => deleteTarea(index)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

function Formulario({ agregarTarea }) {
  const [value, setState] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!value) return;
    agregarTarea(value);
    setState("");
  };

  return (
    <form onSubmit={Submit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </form>
  );
}

function App2() {
  const [todos, setState] = useState([
    {
      text: "Tarea 1",
    },
  ]);

  const agregarTarea = (text) => {
    const newTarea = [...todos, { text }];
    setState(newTarea);
  };

  const deleteTarea = (index) => {
    const newTarea = [...todos];
    newTarea.splice(index, 1);
    setState(newTarea);
  };

  return (
    <div className="app">
      <div className="container listaCompleta">
        <Formulario agregarTarea={agregarTarea} />
        <br></br>
        {todos.map((todo, index) => (
          <DespliegeTarea key={index} index={index} todo={todo} deleteTarea={deleteTarea} />
        ))}
      </div>
    </div>
  );
}

export default App2;
