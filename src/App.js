/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Acordeon from "./componentes/acordeon";
import Instaya1 from "./componentes/instaya1";
import Ordenes from "./componentes/tabla";


const App = ()=> {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Acordeon/>
        </div>
        <div className="col">
          <Instaya1/>
        </div>
        <div className="col">
          <Ordenes/>
        </div>
      </div>
    </div>
  );
}

export default App;