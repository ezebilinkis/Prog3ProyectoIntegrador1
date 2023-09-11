import './Canciones.css'
import { Component } from 'react';

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
            <article>
                <img src={this.props.imagen} alt=""></img>
                <p>{this.props.nombre}</p>
                <p>{this.props.descripcion}</p>
                
                <button>Detalle</button>
                {
                    this.state.ver === false? 
                    <button className='bton' onClick={()=> this.verMas()} >Ver mas</button>
                    :
                    <>
                        <button className='bton' onClick={()=> this.verMenos()} >Ver menos</button>
                        <p>Song by: {this.props.artista} </p>
                    </>
                    
                }
                <button><i className="fa-solid fa-heart"></i></button>
                <button hidden><i className="fa-regular fa-heart"></i></button>
            </article>
        )
    }
    
}

export default Canciones