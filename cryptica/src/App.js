import './App.scss';
import TickerInput from './components/TickerInput/TickerInput';
import TickerList from './pages/TickerList/TickerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TickerInput />
        <div className='header__text'>
          <h1>Cryptica</h1>
        </div>
      </header>
      <main>
        <TickerList />
      </main>
    </div>
  );
}

export default App;
