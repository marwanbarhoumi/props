import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Profile(props) {
  return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="looooool.jpg" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          {props.Profession}
          <p>{props.adress}</p>
          </Card.Text>
          <Button variant="primary"
           onClick={() => props.handleName(props.name)}>
           Goo 
           </Button>
        </Card.Body>
      </Card>

    );
}

