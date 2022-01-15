import React from 'react';
import './SupplyTableView.css';

import Table from 'react-bootstrap/Table';
import Factory from '../../../model/Factory';

type SupplyTableProps = {
  factory: Factory
}


function getRowClass(delta: number) {

  if(delta === 0 ) {
    return 'warn-row';
  }

  if(delta <0) {
    return 'bad-row';
  }

  return ''
}

function SupplyTableView(props: SupplyTableProps) {

  return (
    <div>
      <p>Power: {props.factory.power.toLocaleString()} MW</p>
      <Table className='SupplyTableView' bordered size="sm" variant="dark">
        <thead>
          <tr>
            <th>Delta</th>
            <th>Item</th>
            <th>Supply</th>
            <th>Demand</th>
          </tr>
        </thead>

        <tbody>
        {props.factory.getSupplyTable().entries.map((entry,index) => (
          <tr key={index} className={getRowClass(entry.delta)}>
            <td>{entry.delta}</td>
            <td>{entry.itemName}</td>
            <td>{entry.supply}</td>
            <td>{entry.demand}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SupplyTableView;
