import React from 'react';
import './FactoryView.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import RecipeTable from '../RecipeTable/RecipeTable';

import { recipeLibrary } from '../../../data';
import Factory from '../../../model/Factory';
import { simpleOptimizer } from '../../../optimizer';

const factory : Factory = new Factory('My Factory');

// factory.add(recipeLibrary.getExtractor('Iron Ore', ExtractorLevel.Mark2, NodeQuality.Pure));
// factory.add(recipeLibrary.getByName('Iron Ingot'));
factory.add(recipeLibrary.getByName('Computer'));

const optimizedList = simpleOptimizer(factory);


function FactoryView() {
  return (
    <div>
      <h2>Factory: {factory.name}</h2>

      <Tabs defaultActiveKey="factory-view" id="main-tabs" className="mb-3">
        <Tab eventKey="factory-view" title="Buildings">
          <RecipeTable forge={optimizedList}></RecipeTable>
        </Tab>
        <Tab eventKey="io-view" title="I/O">
          <p>Show Factory I/O List</p>
        </Tab>
        <Tab eventKey="all-view" title="All Recipes">
        <p>Show All Recipes</p>
        </Tab>
      </Tabs>
    </div>

  );
}

export default FactoryView;
