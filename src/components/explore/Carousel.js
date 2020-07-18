import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageCard from "./ImageCard";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.photos,
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].clicked ? false : true;

    // make sure that only one item is selected at one time
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  // map through items and create card component
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <ImageCard
          item={item}
          // onHover={(e) => this.onHover(item.id, e)}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
