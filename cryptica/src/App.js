import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickerList } from './actions/tickerList'; 
import './App.scss';
import TickerInput from './components/TickerInput/TickerInput';
import TickerList from './pages/TickerList/TickerList';
import { socket, subscribeToTicker } from './api/wsApi'

function App() {
  const dispatch = useDispatch();

  const trackedTickers = useSelector(state => state.tickerList.trackedTickers);

  useEffect(() => {
    dispatch(getTickerList());
    socket.onopen = () => trackedTickers.forEach(ticker => subscribeToTicker(ticker));
    socket.onmessage = e => console.log(e.data);
    setTimeout(() => socket.close(), 10000);
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
