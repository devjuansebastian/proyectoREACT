import React, { useState } from 'react';

//Definiendo estilos en constantes

//estilo para usuario logeado
const loggedStyle = {
    color: 'white'
};
//estilo para usuario no loggeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight : 'bold'
}

const GreetinfStyled = (props) => {

    //Generamos un estado para el componente y así controlar
    //si el usuario está loggeado

    const [logged, setLogged] = useState(false);
    const greetingUser = () => (<p>Hola,  { props.name }</p>);
    const pleaseLogin =  () =>  (<p> Please Log In</p>);
    return (
        <div style={ logged ? loggedStyle: unloggedStyle}>
            { logged ? 
            greetingUser(): 
            pleaseLogin()
            }

            <button onClick={() => {
                console.log("botón pulsado");
                setLogged(!logged);
            }}>
                { logged ? 'Log out' : 'Log in' }
            </button>            
        </div>
    );
}

export default GreetinfStyled;
