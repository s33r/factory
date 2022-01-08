
import './RecipeCard.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { SimpleMaker } from '../../../data/simpleTypes';


type RecipeCardProps = {
  recipe: SimpleMaker,
}

function RecipeCard(props: RecipeCardProps) {
  return (
    <Card className="RecipeCard">
      <Card.Header className="text-end text-muted">{props.recipe.buildingName} ({props.recipe.basePower * -1}mw)</Card.Header>
      <Card.Body>
      <Card.Title>{props.recipe.recipeName}</Card.Title>
        <Table>
          <caption className="caption-top">Inputs</caption>
          <tbody>
          {props.recipe.inputs.map((entry, index) => (
            <tr key={index} >
              <td>{entry.rate}</td>
              <th>{entry.item}</th>
            </tr>
          ))}
          </tbody>
        </Table>

        <Table>

          <caption className="caption-top">Outputs</caption>
          <tbody>
          {props.recipe.outputs.map((entry, index) => (
            <tr key={index} >
              <td>{entry.rate}</td>
              <th>{entry.item}</th>
            </tr>
          ))}
          </tbody>
        </Table>
      </Card.Body>



      <Card.Footer>
      <ul className="tag-list list-inline">
          {props.recipe.tags.map((entry, index) => (
            <li key={index} className="list-inline-item"><Badge>{entry}</Badge></li>
          ))}
        </ul>
      </Card.Footer>
    </Card>
  );
}

export default RecipeCard;
