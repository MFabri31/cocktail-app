import { Row, Col } from "react-bootstrap";
import "./Banner.css";

const Hero = ({ children }) => {
  return (
    <div className="banner">
      <Row className="justify-content-center align-items-center custom-row">
        <Col md={4}>{children}</Col>
      </Row>
    </div>
  );
};

export default Hero;
