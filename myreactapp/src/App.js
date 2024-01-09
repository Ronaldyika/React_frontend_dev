import logo from './logo.svg';
import './App.css';
import Greet from './components/props';
import Greeting from './components/read';
import Message from './components/message_states';
import Welcome from './components/class';
import Eventhanle from './components/eventhandlers';
import Counter from './components/counter';
import GetRequest from './components/getrequest';
import FormValidation from './components/formvalidation';
import ReactForms from './components/todayforms';
import GetData from './fetchrequest/get';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* <ReactForms/>
          <Greeting/> */}

          <GetData/>

        </p>
        <div>
          <Eventhanle/>
          {/* <h3>
            <Welcome/>
          </h3> */}

          <div>
    
          </div>

          

          <Counter/>
        </div>
        <div>
          <FormValidation/>
          {/* <Greet name="Ronald" value = "InnerPeace">
            <h2>i am a child heading</h2>
            <button>Click me</button>
          </Greet>
          <Greet name="Yika">
            <p>i am a prop child</p>
          </Greet>
          <Greet name="Juli"></Greet> */}
          <Message/>
          <h2>the get request is to display below this tab</h2>

          {/* <GetRequest/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
