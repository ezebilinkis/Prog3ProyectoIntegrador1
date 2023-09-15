// Album.js
import './Albumes.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Albumes extends Component {

    constructor(props){
        super(props);
        this.state = {
            ver: false,
            props: props,
        }
    }
    
    
    sacarDeFavoritos(albumId){ //eliminar valor que recibo como parametro
        let storageFav = localStorage.getItem('FavAlbums')
        let arrParseado = JSON.parse(storageFav)
        let eliminarFavs = arrParseado.filter((id) => id !== albumId) // (solo me quedo con los Id distintos al que recibi como parametro)
        let arrStringificado = JSON.stringify(eliminarFavs)
        localStorage.setItem('FavAlbums', arrStringificado)
       this.state.props.sacarFav(albumId)
      }
    verMas() {
        this.setState({
            ver: true
        })
    }
    verMenos() {
        this.setState({
            ver: false
        })
    }
    render(){
        return(
            <article className='aalbum'>
                <img className='imgalbum' src={this.props.imagen} alt=""></img>
                <p>{this.props.nombre}</p>
                <p>{this.props.descripcion}</p>
                
                <button className='bton'><Link to={`detalleAlbum/${this.props.id}`}>Detalle</Link></button>
                {
                    this.state.ver === false? 
                    <button className='bton' onClick={()=> this.verMas()} >Ver mas</button>
                    :
                    <>
                        <button className='bton' onClick={()=> this.verMenos()} >Ver menos</button>
                        <p className='palbum'>Album by: {this.props.artista} </p>
                    </>
                    
                }
                
              
              <button onClick={()=>this.sacarDeFavoritos(this.props.id)} ><i className="fa-solid fa-heart"></i></button>

            </article>
        )
    }
    
}

export default Albumes