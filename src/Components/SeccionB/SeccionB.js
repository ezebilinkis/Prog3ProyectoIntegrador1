import React, { Component } from "react";
import Album from "../Albumes/Albumes";

class SeccionA extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album')
      .then(res => res.json())
      .then(data => this.setState({
        albums: data.data.slice(0, 5),
      }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <section>
        <h1 className="Titulo">Álbumes populares</h1>
        <section className="section">
          {this.state.albums.map((album, idx) => (
            <Album
              key={idx}
              nombre={album.title}
              imagen={album.cover}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default SeccionA;
