import React from 'react';
import './RecipeTable.css';

import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import IForge from '../../../model/IForge';
import Factory from '../../../model/Factory';

const h = React.createElement;

type RecipeTableProps = {
  factory: Factory
}

function createCell(content: string, rowSpan: number = 1, colSpan: number = 1) {
  return(<td colSpan={colSpan} rowSpan={rowSpan}>{content}</td>);
}

function createTagsCell(tags: string[], rowSpan: number = 1, colSpan: number = 1) {
  return (
    <td colSpan={colSpan} rowSpan={rowSpan}>
      <ul className="list-unstyled">
      {tags.map((tag, index) =>
        <li key={index}><Badge  bg="primary">{tag}</Badge></li>
      )}
    </ul>

    </td>
  );
}

function renderEntry(index: number, entry: IForge, factory: Factory) {

  const body : React.ReactElement[][] = [];

  const inputRows = entry.inputs.length;
  const outputRows = entry.outputs.length;
  const totalRows = inputRows > outputRows ? inputRows : outputRows;


  const mainRow: React.ReactElement[] = [];

//  mainRow.push(createCell(entry.recipeName, 0));
  mainRow.push(createTagsCell(entry.tags, 0));
  mainRow.push(createCell(entry.buildingName, 0));
  mainRow.push(createCell(entry.instances.toString(), 0));
  mainRow.push(createCell(entry.efficiency.toString(), 0));
  mainRow.push(createCell(entry.power.toString(), 0));
  mainRow.push(createCell(entry.basePower.toString(), 0));

  let currentRow = mainRow;
  for(let j = 0; j < totalRows; j++) {
      const inputSpan = j === (entry.inputs.length - 1) ? 0 : 1;
      const inputPort = j >= entry.inputs.length ? null : entry.inputs[j];

      const outputSpan = j === (entry.outputs.length - 1) ? 0 : 1;
      const outputPort = j >= entry.outputs.length ? null : entry.outputs[j];

      if(outputPort) {
          currentRow.push(createCell(outputPort.rate.toString(), outputSpan));
          currentRow.push(createCell(outputPort.baseRate.toString(), outputSpan));
          currentRow.push(createCell(outputPort.itemName, outputSpan));
      } else if(!entry.outputs.length) {
          currentRow.push(createCell('', inputSpan, 3));
      }

      if(inputPort) {
          currentRow.push(createCell(inputPort.rate.toString(), inputSpan));
          currentRow.push(createCell(inputPort.baseRate.toString(), inputSpan));
          currentRow.push(createCell(inputPort.itemName, inputSpan));
      } else if(!entry.inputs.length) {
          currentRow.push(createCell('', inputSpan, 3));
      }

      body.push(currentRow);
      currentRow = [];
  }


  const tableRows = body.reduce((list, current, index) => {
     list.push(h('tr', {
       key: index
     }, current));

     return list;
    }, []);


    let className = '';
    if(factory.getTotalCompleted(entry.name) >= entry.instances) {
      className = 'complete';
    }

    const tableBody = h('tbody', {key: index, className }, tableRows);

    return tableBody;
}

function RecipeTable(props: RecipeTableProps) {

  return (
    <Table className='RecipeTable' bordered size="sm" variant="dark">
      <thead>
        <tr>
        <th>Tags</th>
          <th>Building</th>
          <th>Instances</th>
          <th>Efficiency</th>

          <th>Total Power</th>
          <th>Instance Power</th>

          <th>Total Output</th>
          <th>Instance Output</th>
          <th>Output Item</th>

          <th>Total Input</th>
          <th>Instance Input</th>
          <th>Input Item</th>


        </tr>
      </thead>

      {props.factory.entries.map((maker, index) => renderEntry(index, maker, props.factory))}

    </Table>
  );
}

export default RecipeTable;
