import { Component } from "react";
import './DetalleAlbum.css'

class detalleAlbum extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            album: '',
            props: props
        }
    }

    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${this.state.id}`)
        .then(res => res.json())
        .then( data => this.setState({
            album: data,
        }))
        .catch(e => console.log(e))
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
                <button className='botondetalle'><i className="fa-solid fa-heart"></i></button>
                <button hidden><i className="fa-regular fa-heart"></i></button>
                </>:
                <h1>Cargando</h1>
                }
                	
            </section>
        )
    }
    
}

export default detalleAlbum