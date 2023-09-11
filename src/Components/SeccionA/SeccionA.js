import React, {Component} from "react"
import Cantantes from "../Canciones/Canciones";
import Albumes from "../Albumes/Albumes";
import './SeccionA.css'
class secciona extends Component{

    constructor(){
        super();
        this.state = {
            albums: [],
            backup: [],
            canciones: [],
            backupB: [],
        }
    }
    componentDidMount(){
        console.log('Monto');
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(res => res.json())
        .then( data => this.setState({
            albums: data.albums.data.slice(0,5),
            backup: data.albums.data.slice(0,5),
            canciones: data.tracks.data.slice(0,5),
            backupB: data.tracks.data.slice(0,5),
        }))
        .catch(e => console.log(e))
    }
    componentDidUpdate(){

    }
    render(){
        console.log(this.state.canciones);
        return(
            <section>
                <h2 className="Titulo">Canciones más populares</h2>
                <section className="section">
                    {
                        this.state.canciones.map((elm, idx) => <Cantantes key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name}/>)
                    } 
                </section>
                <br/>
                <h2 className="Titulo">Albumes más populares</h2>
                <section className="section">
                    {
                        this.state.albums.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover} artista={elm.artist.name} />)
                    } 
                </section>
            </section>
        )
    }
}

export default secciona