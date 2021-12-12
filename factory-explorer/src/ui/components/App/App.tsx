import './App.css';

import RecipeTable from '../RecipeTable/RecipeTable';
import Header from '../Header/Header';
import Maker from '../../../model/Maker';
import { getMaker } from '../../../data';

const makers: Maker[] = [
  getMaker('Iron Ingot'),
  getMaker('Computer'),
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <RecipeTable forge={makers}></RecipeTable>


      </header>
    </div>
  );
}

export default App;
