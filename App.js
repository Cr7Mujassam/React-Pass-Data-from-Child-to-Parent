
import './App.css';
import ChildOne from './child Components/ChildOne';

function App() {
 
  function getname(name){
    alert(name);
  }

  return (
    <div className="App">
      <h1>Transfering the data from child to Parent Components</h1>
      <ChildOne getData={getname}/>
    </div>
  );
}

export default App;
