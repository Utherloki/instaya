/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const App = ()=> {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" alt="" src="https://img.icons8.com/color/2x/bootstrap.png"></img>
            <h1 class="display-5 fw-bold">Bootstrap en React!</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">
                Diseña y personaliza rápidamente sitios adaptables a
                dispositivos móviles con Bootstrap. el kit de herramientas de
                código abierto front-end más popular del mundo
              </p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  Botón Primario
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secundary btn-lg px-4 gap-3"
                >
                  Botón Secundario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;