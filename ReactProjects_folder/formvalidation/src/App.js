import logo from './logo.svg';
import './App.css';
import HeaderContent  from './components/head';
import FormDetail from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContent/>

      </header>
      <section className='App-section'>
        <FormDetail/>


      </section>
      <footer className='Appp-footer'>
          <div>
            content
          </div>
      </footer>
    </div>
  );
}

export default App;
