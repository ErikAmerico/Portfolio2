import Projects from "./Projects";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <div>
      <Row>
        {Projects.map((item, index) => (
          <Col key={index} md={6} lg={6} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={item.Image} />
              <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>{item.Description}</Card.Text>
                <Button
                  variant="primary"
                  href={item.Site}
                  id="projectButton"
                  target="_blank"
                >
                  Check it out!
                </Button>
                <div className="mt-3">
                  <a
                    href={item.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="github-icon2" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
