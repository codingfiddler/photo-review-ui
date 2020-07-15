import React from "react";
import ExploreNavBar from "../components/explore/ExploreNavBar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// import carousel and hero

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      // store images that will be fetched from within component
      photos: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10").then((res) => {
      console.log("res", res);
      if (!res.ok) {
        throw Error("error fetching cute doggie");
      }
      return res
        .json()
        .then((allData) => {
          this.setState({ photos: allData });
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  render() {
    return (
      <div className="explore_">
        <ExploreNavBar />
        <div fluid={true}>
          <Hero item={this.props.information} />
          <Carousel />
          <Footer />
        </div>{" "}
      </div>
    );
  }
}

export default Explore;
