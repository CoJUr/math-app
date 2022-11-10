import './App.css';
import MathComponent from './components/MathComponent';

function App() {
  return (
    <div className="App">
      <MathComponent 
      num1={Math.floor(Math.random() * 100)+1} 
      num2={Math.floor(Math.random() * 100)+1}/>
    </div>
  );
}

export default App;
