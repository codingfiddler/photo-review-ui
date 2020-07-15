import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// text at the top of the Explore page
export default function Hero(props) {
  const { title, subtitle } = props.item;
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-2">
          <Col md={10} sm={12}>
            {title && <h2 className="display-4 font-weight-bolder">{title}</h2>}
            {subtitle && (
              <h2 className="display-5 font-weight-light">{subtitle}</h2>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
