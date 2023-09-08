import React, {Component} from 'react'
import Pelicula from '../Pelicula/Pelicula'
import './styles.css'

class PeliculaContainer extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <>
      <div className='peliculas-container'>
        {
          this.props.peliculas.length === 0 ?
          <h1>Trayendo peliculas</h1> :
          this.props.peliculas.map((personaje)=> 
          <Pelicula 
            id={personaje.id} 
            nombre={personaje.name} 
            imagen={personaje.image} 
            descripcion={personaje.status}
            actualizarState={this.props.actualizarState ? (id) =>  this.props.actualizarState(id) : false}
          />)
        }
      </ div>
      </>
    )
  }
}

export default PeliculaContainer
