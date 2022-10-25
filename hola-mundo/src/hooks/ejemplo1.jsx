// 
import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Ruben',
        email: 'ruben@correo.com'
    }

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);

    function incrementarContador() {
        setcontador(contador + 1);
    }


    function actualizarPersona(nombre) {
        setpersona(
            {
                nombre: 'juan',
                email: 'juan@correo.com'
            }
        );

    }

    return (
        <div>
            <h1>
                *** Ejemplo de useState() ***
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                Datos de la persona:
            </h2>
            <h3>
                Nombre: {persona.nombre}
            </h3>
            <h3>
                Email: {persona.email}
            </h3>
            {/* Botones */}
            <button onClick={incrementarContador} >Incrementar Contador</button>
            <button onClick={actualizarPersona} >Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
