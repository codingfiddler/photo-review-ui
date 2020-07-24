import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (

    <footer style={{
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "#092532",
      color: "white",
      textAlign: "left",
      height: "5%"
    }}>
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-2">

          <Typography variant="body2" color="white" align="center">
            © Krino {new Date().getFullYear()}
          </Typography>

        </Row>
      </Container>
    </footer>
  );
}
