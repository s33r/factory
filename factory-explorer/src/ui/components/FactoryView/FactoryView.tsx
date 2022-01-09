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
  recipeList: SimpleMaker[],
  filterType: 'name',
}



export default class FactoryView extends React.Component<FactoryViewProps, FactoryViewState> {

  readonly state: FactoryViewState;

  constructor(props: FactoryViewProps) {
    super(props);

    this.state = {
      recipeList: recipeLibrary.getAll()
    }
  }

  filterList(event: any) {
    const filter = event.target.value;

    if(!filter) {
      this.setState({
        recipeList: recipeLibrary.getAll()
      });
    } else {
      this.setState({
        recipeList: recipeLibrary.filterByName(filter)
      });
    }
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
              <DropdownButton
                variant="outline-secondary"
                title="Filter Type"
                id="filter-type-selector">

                <Dropdown.Item href="#">Recipe Name</Dropdown.Item>
                <Dropdown.Item href="#">Outputs</Dropdown.Item>
                <Dropdown.Item href="#">Inputs</Dropdown.Item>
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