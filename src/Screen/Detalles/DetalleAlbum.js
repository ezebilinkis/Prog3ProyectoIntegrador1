import { Component } from "react";

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
            <section>
                {this.state.album !== ''?
                <>
                {console.log(this.state.album)}
                <h1>{this.state.album.title}</h1>
                <img src={this.state.album.cover} alt="" ></img>
                <p>Album creado por: {this.state.album.artist.name}</p>
                <p>Pertenece al genero: {this.state.album.genres.data[0].name}</p>
                <p>Fecha de publicacion: {this.state.album.release_date}</p>
                <p>Lista de canciones:</p>
                   {  this.state.album.tracks.data.map((elm, idx)=> <p>{elm.title}</p>) }
                <button><i className="fa-solid fa-heart"></i></button>
                <button hidden><i className="fa-regular fa-heart"></i></button>
                </>:
                <h1>Cargando</h1>
                }
                	
            </section>
        )
    }
    
}

export default detalleAlbum