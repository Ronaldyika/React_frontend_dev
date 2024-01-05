import logo from './logo.svg';
import './App.css';
import Greeting from './components/read';
import Welcome from './components/class';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Greeting/>
        </p>
        <div>
          <h3>
            <Welcome/>
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
