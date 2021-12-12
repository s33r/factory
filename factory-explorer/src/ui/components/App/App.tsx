import './App.css';

import RecipeTable from '../RecipeTable/RecipeTable';
import Header from '../Header/Header';
import Maker from '../../../model/Maker';
import { recipeLibrary } from '../../../data';
import Factory from '../../../model/Factory';
import ExtractorLevel from '../../../data/ExtractorLevel';
import NodeQuality from '../../../data/NodeQuality';

const factory : Factory = new Factory('My Factory');

factory.add(recipeLibrary.getExtractor('Iron Ore', ExtractorLevel.Mark2, NodeQuality.Pure));
factory.add(recipeLibrary.getByName('Iron Ingot'));
factory.add(recipeLibrary.getByName('Computer'));

const makers: Maker[] = factory.entries;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />



      </header>
      <RecipeTable forge={makers}></RecipeTable>
    </div>
  );
}

export default App;
