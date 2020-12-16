import React, { useState } from "react";
import "./styles/App.css";

const Lista = (props) => {
  const [state, setState] = useState({
    label: ["Tarea 1","Tarea 2"],
  });

  return (
    <div>
      <input
        onKeyUp={(e) =>
          e.key === "Enter" && setState({ ...state, label: [...state.label, e.target.value] })
        }
      />
      <ul>
        {state.label.length > 0 ? (
          state.label.map((element, index) => {
            return <li key={index}>{element}</li>;
          })
        ) : (
          "Loading...."
        )}
      </ul>
    </div>
  );
};

export default Lista;
