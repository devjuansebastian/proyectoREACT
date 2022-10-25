/**
 * Ejemplo hooks
 * 
 * de useState()
 * useContext()
 */

 import React, {useState, useContext} from 'react';

 /**
  * 
  * @returns Componente1
  * Dispone de un contexto  que va a tener un valor 
  * que recibe desde el padre
  */
 
 const miContexto =  React.createContext(null);
 
 const Componente1 = () => {
 
     //Inicializamos un estado que va a rellenarse con los datos del padre
     const state = useContext(miContexto);
 
     return (
         <div>
             <h1>
                 El token es : { state.token }
             </h1>
             {/* Pintamos el componente 2*/}
 
             <Componente2></Componente2>
         </div>
     );
 }
 
 const Componente2 = () => {
 
     const state = useContext(miContexto);
 
     return (
         <div>
             <h2> 
             La sesión es:  { state.sesion }
             </h2>
         </div>
     );
 }
 
 
 
 export default function MiComponenteConContexto() {
 
     const estadoInicial = {
         token: '1234567',
         sesion: 1
     }
 
     /**paréntesis/paréntesis redondos
      * corchetes/paréntesis cuadrados 
      * llaves/corchetes         
     */
     function actualizarSesion(){
         setsessionData(
             {
                 token: 'JWT1234566789',
                 sesion: sessionData.sesion + 1
             }
         )
     }
 
     //creamos el estado de este componente
     const [sessionData, setsessionData] = useState(estadoInicial);
 
 
     return (
        <miContexto.Provider value={ sessionData }>
         {/*tod lo que esta aqui adentro puede leer los datos sessionData 
         Además si se actualiza, los componentes de aquí, también lo actualizan   */}
         <h1>Ejemplo useState() useContext()</h1>
         <Componente1></Componente1>
         <button onClick={ actualizarSesion }> Actualizar Sesión </button>
        </miContexto.Provider>
     )
 }

