import React, { Component } from "react";
import axios from "axios";

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      errorMsg: ""
    };
  }

  //method
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        console.log(response);
        this.setState({
          albums: response.data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMsg: "failed to retrieve album list!"
        });
      });
  }

  //render method
  render() {
    const { albums, errorMsg } = this.state;

    return (
      <React.Fragment>
        <h1>Album list</h1>
        {albums.length
          ? albums.map(album => <div key={album.id}>{album.title}</div>)
          : null}
        {errorMsg ? <h5>{errorMsg}</h5> : null}
      </React.Fragment>
    );
  }
}
export default Albums;
