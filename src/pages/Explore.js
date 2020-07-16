import React from "react";
import ExploreNavBar from "../components/explore/ExploreNavBar";
import Hero from "../components/explore/Hero";
import Carousel from "../components/explore/Carousel";
import Footer from "../components/Footer";
import PhotoContainer from "../components/explore/PhotoContainer";
import Link from '@material-ui/core/Link'

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      // store images that will be fetched from within component
      photos: [],
      information: {
        title: "Explore",
        subtitle: "...moments forever frozen",
      },
    };
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10").then((res) => {
      // console.log("res", res);
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
        {/* <PhotoContainer photos={this.state.photos} /> */}
        <ExploreNavBar />
        <div fluid={true}>
          <Hero item={this.state.information} />
          {/* <Carousel /> */}
          <Link href="/review">
            <Carousel photos={this.state.photos} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Explore;
