import './App.css';
import Greet from './Components/Great';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      {/* Re using of component to though props */}
      <Greet name = "Njira"/>          
      <Greet name = "Branice"/>
      <Greet name = "Queen"/>
      <Greet name = "Mourice"/>
{/* end */}

      {/* <Welcome/>
      <Hello/> */}
    </div>
  );
}

export default App;
