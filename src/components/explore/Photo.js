import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default Photo;
