import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetinfStyled from './components/pure/greetinfStyled';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting */}
        {/* <Greeting name={"Ruben"} ></Greeting> */}
        {/* <GreetingF name={"Ruben"} ></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Ruben" >
          <h3>
            contenido del children
          </h3>
        </Ejemplo4> */}
        {/* <GreetinfStyled name="JuanSebastian"></GreetinfStyled> */}

      {/* </header> */}

      <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
