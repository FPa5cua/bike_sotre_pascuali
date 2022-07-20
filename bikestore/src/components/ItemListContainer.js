import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import levasShimanoVintageStyle from '../img'

let ItemListContainer = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" /* src = {levasShimanoVintageStyle}*/  /> 
      <Card.Body>
        <Card.Title>Levas Shimano Vintage</Card.Title>
        <Card.Text>
          Levas Shimano dobles, estilo antiguo, para montar en avance
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;