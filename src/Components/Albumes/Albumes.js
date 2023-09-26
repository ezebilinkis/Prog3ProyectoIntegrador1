//Importamos los componentes
import './Albumes.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

//Creamos el componente con estado Albumes y procesamos las props
class Albumes extends Component {
    constructor(props){
        super(props);
        //Subimos al estado el booleano ver, las props y el booleano de favoritos
        this.state = {
            ver: false,
            props: props,
            esFavorito: false
        }
    }
//Después del primer renderizado chequeamos si el album está en favoritos
    componentDidMount(){
      //Determinamos si el album es favorito en local storage
        let storageFav =  localStorage.getItem('FavAlbums')
        let arrParseado = JSON.parse(storageFav)
        if(arrParseado !== null){
            let albumEsFav = arrParseado.includes(this.props.id)
//Si el album estaba como fav en local storage actualizamos el estado de esFavorito
            if(albumEsFav){
            this.setState({
              esFavorito: true
                })
            }
        }
    }
//Para agregar a favoritos primero determinamos si hay elementos o no.
    agregarAFavoritos(albumId){
        let storageFav = localStorage.getItem('FavAlbums')
          if(storageFav === null){ // Si es nulo no hace falta parsear el localstorage para pushear
            let arrIds = [albumId]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('FavAlbums', arrStringificado)
          } else {
            let arrParseado = JSON.parse(storageFav)
            arrParseado.push(albumId)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('FavAlbums', arrStringificado)
          }
          this.setState({
            esFavorito: true
          })
    }
    sacarDeFavoritos(albumId){ //eliminar valor que recibo como parametro
        let storageFav = localStorage.getItem('FavAlbums')
        let arrParseado = JSON.parse(storageFav)
        let eliminarFavs = arrParseado.filter((id) => id !== albumId) //solo me quedo con los Id distintos al que recibi como parametro
        let arrStringificado = JSON.stringify(eliminarFavs)
        localStorage.setItem('FavAlbums', arrStringificado)
        this.setState({
          esFavorito: false
        })
    }
//Asignamos valores booleanos a ver
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
                {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.props.id)} ><i className="fa-solid fa-heart"></i></button>

              :
              <button onClick={()=> this.agregarAFavoritos(this.props.id)} className='botondetalle'><i className= "fa-regular fa-heart"></i></button>

            }
            </article>
        )
    }
    
}

export default Albumes