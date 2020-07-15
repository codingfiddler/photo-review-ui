import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageCard from "./ImageCard";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "C-3P0",
          eye: "@darkestSithLord",
          imgSrc:
            "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
          link:
            "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
          selected: false,
        },
        {
          id: 1,
          title: "Canterbury",
          eye: "@waterLilies",
          imgSrc:
            "https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 2,
          title: "Zion",
          eye: "@jackie_r",
          imgSrc:
            "https://images.unsplash.com/photo-1594357570657-12d14a5b530f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594357570657-12d14a5b530f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 3,
          title: "Blues",
          eye: "@yourFriendlyNeighborhoodPhotographer",
          imgSrc:
            "https://images.unsplash.com/photo-1594671658937-09ac0c285e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594671658937-09ac0c285e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 4,
          title: "small and fragile",
          eye: "@jackie_r",
          imgSrc:
            "https://images.unsplash.com/photo-1594698434950-678673fab059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594698434950-678673fab059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 5,
          title: "boats on clear green water",
          eye: "@water takes",
          imgSrc:
            "https://images.unsplash.com/photo-1594706243394-4523943cabb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
          link:
            "https://images.unsplash.com/photo-1594706243394-4523943cabb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
          selected: false,
        },
        {
          id: 6,
          title: "Summer Afternoons",
          eye: "@photographerByDay",
          imgSrc:
            "https://images.unsplash.com/photo-1594638804435-94cb48642b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594638804435-94cb48642b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 7,
          title: "'Pointing'",
          eye: "@FN-2157",
          imgSrc:
            "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
        {
          id: 8,
          title: "'Pointing'",
          eye: "@FN-2157",
          imgSrc:
            "https://images.unsplash.com/photo-1594639365410-c3c6c58fa0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          link:
            "https://images.unsplash.com/photo-1594639365410-c3c6c58fa0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          selected: false,
        },
      ],
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
