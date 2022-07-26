import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import levasShimanoVintageStyle from '../img/levasShimanoVintageStyle.jpg'

let ItemListContainer = () => {

  console.log('Soy el itmeList, me renderice')

  const onAdd = (counter) =>{
    console.log(`agregaste ${counter} al carrito`)

  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = { levasShimanoVintageStyle }  /> 
      <Card.Body>
        <Card.Title>Levas Shimano Vintage</Card.Title>
        <Card.Text>
          Levas Shimano dobles, estilo antiguo, para montar en avance
        </Card.Text>
        <ItemCount initial={0} stock={10} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;