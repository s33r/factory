import React from 'react';
import './FactoryView.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import RecipeTable from '../RecipeTable/RecipeTable';
import SupplyTableView from '../SupplyTableView/SupplyTableView';

import { recipeLibrary } from '../../../data';
import Factory from '../../../model/Factory';

const allRecipes  = new Factory('All Recipes');
recipeLibrary.getAll().forEach(r => allRecipes.add(r));


type FactoryViewProps = {
  factory: Factory
}


// factory.optimize();

function FactoryView(props: FactoryViewProps) {
  return (
    <div>
      <h2>Factory: {props.factory.name}</h2>

      <Tabs defaultActiveKey="factory-view" id="main-tabs" className="mb-3">
        <Tab eventKey="factory-view" title="Buildings">
          <RecipeTable factory={props.factory}></RecipeTable>
        </Tab>
        <Tab eventKey="io-view" title="I/O">
          <SupplyTableView factory={props.factory}/>
        </Tab>
        <Tab eventKey="all-view" title="All Recipes">
        <RecipeTable factory={allRecipes}></RecipeTable>
        </Tab>
      </Tabs>
    </div>

  );
}

export default FactoryView;
