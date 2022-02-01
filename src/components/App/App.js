import NameComp from '../NameComp/NameComp';
import './App.css';

function App() {
  return (
    <div className="App">
      <NameComp 
      names={["Петя", "Вася", "Коля", "Толя", "Петя", "Вася", "Артемий", "Дмитрий", "Артемий"]} />
    </div>
  );
}

export default App;
