import React, {Component} from "react"
import Canciones from "../Canciones/Canciones";
import './VerTodasCanciones.css'

class VerTodasCanciones extends Component{

    constructor(){
        super();
        this.state = {
            albums: [],
            backup: [],
            canciones: [],
            backupB: [],
            index:0
        }
    }
    componentDidMount(){
        console.log('Monto');
        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart?index=0&limit=10')
        .then(res => res.json())
        .then( data => this.setState({
            albums: data.albums.data,
            backup: data.albums.data,
            canciones: data.tracks.data,
            backupB: data.tracks.data.slice,
            index: this.state.index + 10
        }) )
        .catch(e => console.log(e))
    }
    componentDidUpdate(){

    }
    render(){
        return (
            <section>
                <h2 className="Titulo">Todas las canciones</h2>
                <section className="section">
                    {
                        this.state.canciones.map((elm, idx) => <Canciones key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name} id={elm.id}/>)
                    } 
                </section>
            </section>
        )}
        }
export default VerTodasCanciones