import React from "react";
import ExploreNavBar from "../components/explore/ExploreNavBar";
import Hero from "../components/explore/Hero";
import PhotoContainer from "../components/explore/PhotoContainer";
import Link from "react-router-dom/Link";
import ScrollUpArrow from "../components/ScrollUpArrow";

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      // store images that will be fetched from within component
      photos: [
        {
          username: "first_user",
          title: "greek",
          photo_id: 0,
          url:
            "https://krino-photos.s3.amazonaws.com/FBEEECCF-02E2-45D4-BE04-432226465F01_hb9jlmr.jpeg",
        },
      ],
      information: {
        title: "Explore",
        subtitle: "...moments forever frozen",
      },
      hovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {}

  componentDidMount() {
    // https://api.thedogapi.com/v1/images/search?limit=3
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      (res) => {
        if (!res.ok) {
          throw Error("error fetching cute doggie");
        }
        return res
          .json()
          .then((allData) => {
            this.setState({ photos: this.state.photos }); // allData
          })
          .catch((err) => {
            throw Error(err.message);
          });
      }
    );
  }

  render() {
    return (
      <div>
        <ExploreNavBar />
        <ScrollUpArrow />
        <div fluid={true}>
          <Hero item={this.state.information} />
          <PhotoContainer photos={this.state.photos} />
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Explore;
