import React from "react";

function Login()
{
    return(
        <div className="vh100 container d-flex justify-content-center flex-column align-items-center">
            <form action="/" className="border-c col-6 d-flex flex-column justify-content-center align-items-center">
                <fieldset className="d-flex flex-column mb-4">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" />
                </fieldset>
                
                <fieldset className="d-flex flex-column mb-4">
                    <label htmlFor="contraseña">Clave</label>
                    <input type="password" />
                </fieldset>

                <button type="button" className="btn btn-outline-secondary">INGRESAR</button>
            </form>
        </div>
    );
}

export default Login