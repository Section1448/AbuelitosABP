import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Cards.css';

function Cards({imgSrc, title, text, link}){

    return(
    <div>
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} alt='No carga' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" as={Link} to={link} >Accede aqui</Button>
      </Card.Body>
      <Card.Footer className='text-muted'>Fecha de actualizacion</Card.Footer>
    </Card>
    </div>
    );
}

export default Cards;