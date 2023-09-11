import { Component } from "react";
import './DetalleCancion.css'

class detalleCancion extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            cancion: '',
            props: props
        }
    }

    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${this.state.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            cancion: data,
        }))
        .catch(e => console.log(e))
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
                <button className="botondetalle"><i className="fa-solid fa-heart"></i></button>
                <button hidden className="botondetalle"><i className="fa-regular fa-heart"></i></button>
                </>:
                <h1>Cargando</h1>
                }
                	
            </section>
        )
    }
    
}

export default detalleCancion