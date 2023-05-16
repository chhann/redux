import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';
import ExConterBox from './components/ExConterBox';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <hr/>
      <ExConterBox/>
      <hr/>
      <MemoComp />
      <hr/>
      
    </div>
  );
}

export default App;
