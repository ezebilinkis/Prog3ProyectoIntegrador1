import React, { Component } from 'react'
import FichaContainer from "../../components/FichaContainer/FichaContainer";
import PeliculasContainer from "../../components/PeliculasContainer/PeliculassContainer";
import './styles.css'

class index extends Component {
  render() {
    return (
        <div>
        <h1>My App in React</h1>
        <main>
          <PeliculasContainer />
        </main>
        {/* <CharactersContainer /> */}
        <Contador />
      </div>
    )
  }
}

export default index
