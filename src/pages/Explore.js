import React from "react";
import ExploreNavBar from "../components/explore/ExploreNavBar";
import Hero from "../components/explore/Hero";
import PhotoContainer from "../components/explore/PhotoContainer";

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      // store images that will be fetched from within component
      photos: [
        {
          id: 1,
          title: "White Rocks, Touch of Sunshine",
          photographer: "@byTheLake",
          url:
            "https://images.unsplash.com/photo-1595236332861-7553ef284422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          id: 2,
          title: "accusamus beatae ad facil",
          photographer: "@concreteJungler",
          url:
            "https://images.unsplash.com/photo-1595230907762-54cfe6dbd901?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80",
        },
        {
          id: 3,
          title: "Look Through",
          photographer: "@kathyJennings",
          url:
            "https://images.unsplash.com/photo-1595213119673-e7b717419abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
        },
        {
          id: 4,
          title: "Leaf Shadow",
          photographer: "@shadowHunter",
          url:
            "https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        },
        {
          id: 5,
          title: "Bread, Wine Glass, Fruit",
          photographer: "@summerFunner",
          url:
            "https://images.unsplash.com/photo-1595232878814-74d5a59ed9e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1282&q=80",
        },
        {
          id: 7,
          title: "Brown and Gray Mountains",
          photographer: "@traveler",
          url:
            "https://images.unsplash.com/photo-1595232548387-101b19c0c757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        },
        {
          id: 8,
          title: "Above the Clouds",
          photographer: "@viewer10232",
          url:
            "https://images.unsplash.com/photo-1595181271233-35297004788d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
        },
        {
          id: 9,
          title: "somewhere over the rainbow",
          photographer: "@cloudChaser",
          url:
            "https://images.unsplash.com/photo-1595169269500-1993571072e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        },

        {
          id: 10,
          title: "flowers, blue pot",
          photographer: "@cloudChaser",
          url:
            "https://images.unsplash.com/photo-1595162244081-72420b24fe6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
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
        <div fluid={true}>
          <Hero item={this.state.information} />
          <PhotoContainer
            onHover={this.handleHover}
            photos={this.state.photos}
          />
        </div>
      </div>
    );
  }
}

export default Explore;
