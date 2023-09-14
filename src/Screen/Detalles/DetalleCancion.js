import { Component } from "react";
import './DetalleCancion.css'

class detalleCancion extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            cancion: '',
            props: props,
            esFavorito: false

        }
    }

    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${this.state.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            cancion: data,
        }, ()=> {

            let storageFav =  localStorage.getItem('favoritos')
            let arrParseado = JSON.parse(storageFav)
    
            if(arrParseado !== null){
              let estaCancionEnFav = arrParseado.includes(this.state.cancion.id)
    
              if(estaCancionEnFav){
                this.setState({
                  esFavorito: true
                })
              }
            }
  
          }))
        .catch(e => console.log(e))
    }
    agregarAFavoritos(cancionId){         
        let storageFav = localStorage.getItem('favoritos')
          if(storageFav === null){
            let arrIds = [cancionId]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('favoritos', arrStringificado)
          } else {
            let arrParseado = JSON.parse(storageFav)
            arrParseado.push(cancionId)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('favoritos', arrStringificado)
          }
          this.setState({
            esFavorito: true
          })
    }
    sacarDeFavoritos(cancionId){ //eliminar valor que recibo como parametro
        let storageFav = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storageFav)
        let eliminarFavs = arrParseado.filter((id) => id !== cancionId) // (solo me quedo con los Id distintos al que recibi como parametro)
        let arrStringificado = JSON.stringify(eliminarFavs)
        localStorage.setItem('favoritos', arrStringificado)
        this.setState({
          esFavorito: false
        })
      }

    render(){
        
        return(
            <section className="sectioncancion">
                {this.state.cancion !== ''?
                <>
                {console.log(this.state.cancion)}
                <h1 className="h1cancion">{this.state.cancion.title}</h1>
                <img className="imgcancion" src={this.state.cancion.album.cover} alt="" ></img>
                <p className="pcancion">Cancion por: {this.state.cancion.artist.name}</p>
                <p className="pcancion">Album creado por: {this.state.cancion.album.title}</p>
                <iframe title="deezer-widget" src={this.state.cancion.preview} width="80%" height="200px" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.state.cancion.id)} ><i className="fa-solid fa-heart"></i></button>

              :
              <button onClick={()=> this.agregarAFavoritos(this.state.cancion.id)} className='botondetalle'><i className= "fa-regular fa-heart"></i></button>

            }
                </>:
                <h1>Cargando</h1>
                }
                	
            </section>
        )
    }
    
}

export default detalleCancion