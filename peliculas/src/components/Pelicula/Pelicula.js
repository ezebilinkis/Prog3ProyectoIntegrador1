import { Component } from "react"
import { Link } from "react-router-dom"

class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false
        }
    }

    componentDidMount(){
        let storageFav =  localStorage.getItem('favoritos')
          let arrParseado = JSON.parse(storageFav)
  
          if(arrParseado !== null){
            let estaMiPersonaje = arrParseado.includes(this.props.id)
  
            if(estaMiPersonaje){
              this.setState({
                esFavorito: true
              })
            }
          }
    }

    agregarAFavoritos(idPersonaje){
        let storageFav = localStorage.getItem('favoritos')
        if(storageFav === null){
          let arrIds = [idPersonaje]
          let arrStringificado = JSON.stringify(arrIds)
          localStorage.setItem('favoritos', arrStringificado)
        } else {
          let arrParseado = JSON.parse(storageFav)
          arrParseado.push(idPersonaje)
          let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('favoritos', arrStringificado)
        }
  
        this.setState({
          esFavorito: true
        })
      }
  
      sacarDeFavoritos(idPersonaje){
        let storageFav = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storageFav)
        let favsFiltrados = arrParseado.filter((id) => id !== idPersonaje)
        let arrStringificado = JSON.stringify(favsFiltrados)
        localStorage.setItem('favoritos', arrStringificado)

        if(this.props.actualizarState !== false){
            this.props.actualizarState(idPersonaje)
            return
        }

        this.setState({
          esFavorito: false
        })
        
      }
  

    render(){
        return(
        <div className="character-card">
              <Link to={`/personaje/id/${this.props.id}`}>
                <img src={this.props.imagen} alt={this.props.nombre} />
              </Link>
              <h4>{this.props.nombre}</h4>
              <p>{this.props.descripcion}</p>
              <a href="#">Ver más</a>
              {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.props.id)}>
                Sacar de favoritos
              </button>  
              :
              <button onClick={()=> this.agregarAFavoritos(this.props.id)}>
                Agregar a favoritos
              </button>
            }
          </div>
        )
    }
}

export default Pelicula