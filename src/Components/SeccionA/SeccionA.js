import React, {Component} from "react"
import Cantantes from "../Cantantes/Cantantes";
import Albumes from "../Albumes/Albumes";
import './SeccionA.css'
class secciona extends Component{

    constructor(){
        super();
        this.state = {
            cantantes: [],
            backupB: [],
            albums: [],
            backup: [],
            canciones: []
        }
    }
    componentDidMount(){
        console.log('Monto');
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(res => res.json())
        .then( data => this.setState({
            cantantes: data.artists.data.slice(0,5),
            backupB: data.artists.data.slice(0,5),
            albums: data.albums.data.slice(0,5),
            backup: data.albums.data.slice(0,5),
            canciones: data.tracks.data.slice(0,5)
        }))
        .catch(e => console.log(e))
    }
    componentDidUpdate(){

    }
    render(){
        console.log(this.state.albums);
        console.log(this.state.cantantes);
        console.log(this.state.canciones);
        return(
            <section>
                <h2 className="Titulo">Artistas más populares</h2>
                <section className="section">
                    {
                        this.state.cantantes.map((elm, idx) => <Cantantes key={idx} nombre={elm.name} imagen={elm.picture}  />)
                    } 
                </section>
                <br/>
                <h2 className="Titulo">Albumes más populares</h2>
                <section className="section">
                    {
                        this.state.albums.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover}  />)
                    } 
                </section>
            </section>
        )
    }
}

export default secciona