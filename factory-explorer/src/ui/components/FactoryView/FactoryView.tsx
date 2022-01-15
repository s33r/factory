import React from 'react';
import './FactoryView.css';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


import RecipeTable from '../RecipeTable/RecipeTable';
import SupplyTableView from '../SupplyTableView/SupplyTableView';

import { recipeLibrary } from '../../../data';
import Factory from '../../../model/Factory';
import { SimpleMaker } from '../../../data/simpleTypes';
import RecipeCard from '../RecipeCard/RecipeTable';

const allRecipes  = new Factory('All Recipes');
recipeLibrary.getAll().forEach(r => allRecipes.add(r));


type FactoryViewProps = {
  factory: Factory
}

type FactoryViewState = {
  filterText: string,
  recipeList: SimpleMaker[],
  filterType: string,
  filterTypeText: string,
}

const filterTypeKeys : {[key: string]: string} = {
  name : 'Recipe Name',
  output : 'Output',
  input : 'Input',
  tag : 'Tag',
  building : 'Building',
}

function updateState(filterText: string, filterType: string) : FactoryViewState {
  if(!filterText) {
    return {
      filterText,
      filterType,
      recipeList: recipeLibrary.getAll(),
      filterTypeText: filterTypeKeys[filterType],
    };
  }

  let recipeList;

  if(filterType === 'name') {
      recipeList = recipeLibrary.filterByName(filterText);
  } else if(filterType === 'input') {
      recipeList = recipeLibrary.filterByInput(filterText);
  } else if(filterType === 'output') {
      recipeList = recipeLibrary.filterByOutput(filterText);
  } else if(filterType === 'tag') {
      recipeList = recipeLibrary.filterByTag(filterText);
  } else if(filterType === 'building') {
      recipeList = recipeLibrary.filterByBuilding(filterText);
  } else {
      recipeList = recipeLibrary.filterByName(filterText);
  }

  return {
    filterText,
    filterType,
    recipeList,
    filterTypeText: filterTypeKeys[filterType],
  };
}

export default class FactoryView extends React.Component<FactoryViewProps, FactoryViewState> {

  readonly state: FactoryViewState;

  constructor(props: FactoryViewProps) {
    super(props);

    this.state = {
      filterText: '',
      recipeList: recipeLibrary.getAll(),
      filterType: 'name',
      filterTypeText: filterTypeKeys.name,
    }
  }

  filterList(event: any) {
    const newState = updateState(event.target.value, this.state.filterType);

    this.setState(newState);
  }

  changeFilterType(filterType: string | null) {
    const filterTypeActual = filterType || 'name';

    const newState = updateState(this.state.filterText, filterTypeActual);

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h2>Factory: {this.props.factory.name}</h2>

        <Container id="action-row" fluid>

          <Button variant="primary">Download Factory</Button>

        </Container>

        <Tabs defaultActiveKey="factory-view" id="main-tabs" className="mb-3">
          <Tab eventKey="factory-view" title="Buildings">
            <RecipeTable factory={this.props.factory}></RecipeTable>
          </Tab>
          <Tab eventKey="io-view" title="I/O">
            <SupplyTableView factory={this.props.factory}/>
          </Tab>
          <Tab eventKey="all-view" title="All Recipes">
            <Container fluid>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Filter By</InputGroup.Text>
                <DropdownButton
                  variant="outline-secondary"
                  title={this.state.filterTypeText}
                  onSelect={this.changeFilterType.bind(this)}
                  id="filter-type-selector">

                  <Dropdown.Item eventKey="name">Recipe Name</Dropdown.Item>
                  <Dropdown.Item eventKey="output">Output</Dropdown.Item>
                  <Dropdown.Item eventKey="input">Input</Dropdown.Item>
                  <Dropdown.Item eventKey="tag">Tag</Dropdown.Item>
                  <Dropdown.Item eventKey="building">Building</Dropdown.Item>
                </DropdownButton>
                <FormControl
                  placeholder="Recipe Name"
                  aria-label="Filter Text"
                  aria-describedby="recipe-filter"
                  onChange={this.filterList.bind(this)}
                  />
              </InputGroup>

              <Container fluid>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {this.state.recipeList.map((entry,index) => (
                      <Col key={index}>
                        <RecipeCard recipe={entry}></RecipeCard>
                      </Col>
                    ))}
                </Row>
              </Container>

            </Container>


          </Tab>

        </Tabs>
      </div>

    );
  }
}