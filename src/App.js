import './App.css';
import Counter from './components/counter';
import { Provider } from 'react-redux';
import store from './components/store';
import Random from './components/random';
function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <header className="App-header">
        <Counter />
        <Random />
      </header>
      </Provider>
    </div>
  );
}

export default App;
