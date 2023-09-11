import './Canciones.css'
import { Component } from 'react';
import {Link} from 'react-router-dom'
class Canciones extends Component {

    constructor(props){
        super(props);
        this.state = {
            ver: false,
            props: props,
        }
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
                <button><i className="fa-solid fa-heart"></i></button>
                <button hidden><i className="fa-regular fa-heart"></i></button>
            </article>
        )
    }
    
}

export default Canciones