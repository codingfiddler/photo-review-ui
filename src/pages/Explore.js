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
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594976382948-12e3439721b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594976382948-12e3439721b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
        },
        {
          albumId: 1,
          id: 2,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594920271939-01e7158cc2a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594920271939-01e7158cc2a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        },
        {
          albumId: 1,
          id: 3,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594972648683-4482b577ff9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594972648683-4482b577ff9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          albumId: 1,
          id: 4,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594910336126-2ff2562441bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594910336126-2ff2562441bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        },
        {
          albumId: 1,
          id: 5,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594916081106-94d955afb361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594916081106-94d955afb361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          albumId: 1,
          id: 7,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url:
            "https://images.unsplash.com/photo-1594879572756-e254199fea05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1594879572756-e254199fea05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
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
