import Projects from './Projects';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Project() {
    return (
        <div>
            {Projects.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.Image} />
                    <Card.Body>
                        <Card.Title>{item.Title}</Card.Title>
                        <Card.Text>
                            {item.Description}
                        </Card.Text>
                        <Button variant='primary' href='item.Site'>
                            Take a look!
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )

}