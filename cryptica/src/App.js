import { useEffect } from 'react';
import { getCoinList } from './api/httpsApi';
import './App.scss';
import TickerInput from './components/TickerInput/TickerInput';
import TickerList from './pages/TickerList/TickerList';

function App() {
  useEffect(() => {
    getCoinList();
  }, [])

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
