import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    
    const [contador1, setsContador1] = useState(0);
    const [contador2, setsContador2] = useState(0);

    const miRef = useRef();

    function incrementarUno(){
        setsContador1(contador1 + 1);
    }

    function incrementarDos(){
        setsContador2(contador2 + 2);
    }

    // useEffect(() => {
    //     console.log("Cambio en el estado del componente")
    //     console.log("Mostrando referencia al elemento")
    //     console.log(miRef)
    // });

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia al elemento del DOM')
    //     console.log(miRef);
    // }, [contador1]);

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL cont1 / cont2');
        console.log('Mostrando referencia al elemento del DOM')
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>
                *** Ejemplo de useState() useRef() y useEffect() ***
            </h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef} > Ejemplo de referenciado</h4>
            <button onClick={incrementarUno} >Incrementar Contador 1</button>
            <button onClick={incrementarDos} >Incrementar Contador 2</button>
        </div>
    );
}

export default Ejemplo2;
