import React from "react";
import ExploreNavBar from "../components/explore/ExploreNavBar";
import Hero from "../components/explore/Hero";
import PhotoContainer from "../components/explore/PhotoContainer";
import ScrollUpArrow from "../components/ScrollUpArrow";
import axios from "axios";

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      // store images that will be fetched from within component
      photos: [

      ],
      information: {
        title: "Explore",
        subtitle: "...moments forever frozen",
      },
      hovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() { }

  componentDidMount() {
    // https://api.thedogapi.com/v1/images/search?limit=3


    // axios.get("https://krino-images.s3.amazonaws.com/IMG_20200404_124353_Izd0TNN.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASFEFGCHVIWFT5YLB%2F20200731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200731T004216Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3948798f5a3a02116adf197624b5658140183ab59270a71c349e007f5abd00f2")
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })


    axios.get("https://api.krino.fiddlingphotographer.com/users/upload/")
      .then(response => {
        const data = response.data
        this.setState({ photos: data });
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
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
