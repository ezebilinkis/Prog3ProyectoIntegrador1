import {Component} from 'react'
import Cantantes from '../../Components/CancionesFav/CancionesFav'
import Albumes from "../../Components/AlbumesFav/AlbumesFav";

 class Favoritos extends Component{
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      canciones: [],
    }
  }
  componentDidMount(){
    let FavAlbumsId = localStorage.getItem('FavAlbums')
    let FavCancionesId = localStorage.getItem('FavCanciones')
    if(FavAlbumsId !== null){
      let FavAlbums = JSON.parse(FavAlbumsId)
      Promise.all(
        FavAlbums.map( id => 
          fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`)
            .then( resp => resp.json())
          )
      )
      .then( data => this.setState({albums: data}))
      .catch(err => console.log(err))
    }
    
    if(FavCancionesId !== null){
      let FavCanciones = JSON.parse(FavCancionesId)
      Promise.all(
        FavCanciones.map( id => 
          fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`)
            .then( resp => resp.json())
          )
      )
      .then( data => this.setState({canciones: data}))
      .catch(err => console.log(err))
    }
  }
  //Saca al album del estado
  actualizarStateAlbumes(id){
    let stateActualizado = this.state.albums.filter(elm => elm.id !== id)
    this.setState({
      albums: stateActualizado
    })
  }
  //Saca la cancion del estado
  actualizarStateCanciones(id){
    let stateActualizado = this.state.canciones.filter(elm => elm.id !== id)
    this.setState({
      canciones: stateActualizado
    })
  }

  render(){
    return(
      <section>
              <h2 className="Titulo">Canciones favoritas</h2>
                <section className="section">
                  {this.state.canciones.length !== 0?
                    this.state.canciones.map((elm, idx) => <Cantantes key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name} id={elm.id} sacarFav={(id)=> this.actualizarStateCanciones(id)}/>)
                    :
                    <h2>No hay canciones en favoritos</h2>
                   
                }
                    
                </section>
                <br/>
                <h2 className="Titulo">Albumes favoritos</h2>
                <section className="section">
                    {this.state.albums.length !== 0?
                        this.state.albums.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover} artista={elm.artist.name} id={elm.id} sacarFav={(id)=> this.actualizarStateAlbumes(id)} />)
                      :
                      <h2>No hay albumes en favoritos</h2>
                    } 
                </section>
            </section>
    )
  }
 }
export default Favoritos