import './App.css';



import Header from '../Header/Header';
import FactoryView from '../FactoryView/FactoryView';
import createFactory from '../../createFactory';

const factory = createFactory();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <FactoryView factory={factory} />

    </div>
  );
}

export default App;
