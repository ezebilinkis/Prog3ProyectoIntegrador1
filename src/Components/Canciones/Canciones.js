import './Canciones.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'
class Canciones extends Component {

    constructor(props){
        super(props);
        this.state = {
            ver: false,
            props: props,
            esFavorito: false
        }
    }
    componentDidMount(){
        let storageFav =  localStorage.getItem('FavCanciones')
            let arrParseado = JSON.parse(storageFav)
    
            if(arrParseado !== null){
              let estaCancionEnFav = arrParseado.includes(this.props.id)
    
              if(estaCancionEnFav){
                this.setState({
                  esFavorito: true
                })
              }}
    }
    agregarAFavoritos(cancionId){         
        let storageFav = localStorage.getItem('FavCanciones')
          if(storageFav === null){
            let arrIds = [cancionId]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('FavCanciones', arrStringificado)
          } else {
            let arrParseado = JSON.parse(storageFav)
            arrParseado.push(cancionId)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('FavCanciones', arrStringificado)
          }
          this.setState({
            esFavorito: true
          })
    }
    sacarDeFavoritos(cancionId){ //eliminar valor que recibo como parametro
        let storageFav = localStorage.getItem('FavCanciones')
        let arrParseado = JSON.parse(storageFav)
        let eliminarFavs = arrParseado.filter((id) => id !== cancionId) // (solo me quedo con los Id distintos al que recibi como parametro)
        let arrStringificado = JSON.stringify(eliminarFavs)
        localStorage.setItem('FavCanciones', arrStringificado)
        this.setState({
          esFavorito: false
        })
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

export default Canciones