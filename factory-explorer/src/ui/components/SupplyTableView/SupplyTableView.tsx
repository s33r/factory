import React from 'react';
import './SupplyTableView.css';

import Table from 'react-bootstrap/Table';
import Factory from '../../../model/Factory';

type SupplyTableProps = {
  factory: Factory
}

function SupplyTableView(props: SupplyTableProps) {

  return (
    <Table className='SupplyTableView' bordered size="sm" variant="dark" striped>
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
        <tr key={index}>
          <td>{entry.delta}</td>
          <td>{entry.itemName}</td>
          <td>{entry.supply}</td>
          <td>{entry.demand}</td>
        </tr>
      ))}
      </tbody>



    </Table>
  );
}

export default SupplyTableView;
