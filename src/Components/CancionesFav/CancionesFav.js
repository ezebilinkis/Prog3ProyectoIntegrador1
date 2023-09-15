import './Canciones.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'
class CancionesFav extends Component {

    constructor(props){
        super(props);
        this.state = {
            ver: false,
            props: props,
        }
    }
    
    sacarDeFavoritos(cancionId){ //eliminar valor que recibo como parametro
        let storageFav = localStorage.getItem('FavCanciones')
        let arrParseado = JSON.parse(storageFav)
        let eliminarFavs = arrParseado.filter((id) => id !== cancionId) // (solo me quedo con los Id distintos al que recibi como parametro)
        let arrStringificado = JSON.stringify(eliminarFavs)
        localStorage.setItem('FavCanciones', arrStringificado)
        this.state.props.sacarFav(cancionId)
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
            <article className='acancion'>
                <img className='imgcancion' src={this.props.imagen} alt=""></img>
                <p className='pcancion'>{this.props.nombre}</p>
                <p className='pcancion'>{this.props.descripcion}</p>
                
                <button><Link to={`detalleCancion/${this.props.id}`}>Detalle</Link></button>
                {
                    this.state.ver === false? 
                    <button className='bton' onClick={()=> this.verMas()} >Ver mas</button>
                    :
                    <>
                        <button className='bton' onClick={()=> this.verMenos()} >Ver menos</button>
                        <p className='pcancion'>Song by: {this.props.artista} </p>
                    </>
                    
                }
                
              
              <button onClick={()=> this.sacarDeFavoritos(this.props.id)} ><i className="fa-solid fa-heart"></i></button>

              
            </article>
        )
    }
    
}

export default CancionesFav