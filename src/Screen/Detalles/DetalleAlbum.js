import { Component } from "react";
import './DetalleAlbum.css'

class detalleAlbum extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            album: '',
            props: props,
            esFavorito: false
            
        }
    }

    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${this.state.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            album: data
        }, ()=> {

            let storageFav =  localStorage.getItem('favoritos')
            let arrParseado = JSON.parse(storageFav)
    
            if(arrParseado !== null){
              let estaMiPersonaje = arrParseado.includes(this.state.album.id)
    
              if(estaMiPersonaje){
                this.setState({
                  esFavorito: true
                })
              }
            }
  
          }))
        .catch(e => console.log(e))

    }
agregarAFavoritos(albumId){         //cambiar nombre de var
    let storageFav = localStorage.getItem('favoritos')
      if(storageFav === null){
        let arrIds = [albumId]
        let arrStringificado = JSON.stringify(arrIds)
        localStorage.setItem('favoritos', arrStringificado)
      } else {
        let arrParseado = JSON.parse(storageFav)
        arrParseado.push(albumId)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('favoritos', arrStringificado)
      }
      this.setState({
        esFavorito: true
      })
}
sacarDeFavoritos(albumId){ //eliminar valor que recibo como parametro
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)
    let eliminarFavs = arrParseado.filter((id) => id !== albumId) // (solo me quedo con los Id distintos al que recibi como parametro)
    let arrStringificado = JSON.stringify(eliminarFavs)
    localStorage.setItem('favoritos', arrStringificado)
    this.setState({
      esFavorito: false
    })
  }
    render(){
        
        return(
            <section className="sectiondetalle">
                {this.state.album !== ''?
                <>
                {console.log(this.state.album)}
                <h1 className='h1detalle'>{this.state.album.title}</h1>
                <img className='fotodetalle' src={this.state.album.cover} alt="" ></img>
                <p className='pdetalle'>Album creado por: {this.state.album.artist.name}</p>
                <p className='pdetalle'>Pertenece al genero: {this.state.album.genres.data[0].name}</p>
                <p className='pdetalle'>Fecha de publicacion: {this.state.album.release_date}</p>
                <p className='pdetalle'>Lista de canciones:</p>
                   {  this.state.album.tracks.data.map((elm, idx)=> <p>{elm.title}</p>) }

                   {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.state.album.id)} ><i className="fa-solid fa-heart"></i></button>

              :
              <button onClick={()=> this.agregarAFavoritos(this.state.album.id)} className='botondetalle'><i className= "fa-regular fa-heart"></i></button>

            }
                
                </>:
                <h1>Cargando</h1>
                }
                	
            </section>
        )
    }
    
}

export default detalleAlbum

