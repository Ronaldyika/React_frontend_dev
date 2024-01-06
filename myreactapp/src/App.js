import logo from './logo.svg';
import './App.css';
import Greet from './components/props';
import Greeting from './components/read';
import Message from './components/message_states';
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
        <div>
          {/* <Greet name="Ronald" value = "InnerPeace">
            <h2>i am a child heading</h2>
            <button>Click me</button>
          </Greet>
          <Greet name="Yika">
            <p>i am a prop child</p>
          </Greet>
          <Greet name="Juli"></Greet> */}
          <Message/>
        </div>
      </header>
    </div>
  );
}

export default App;
