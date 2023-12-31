//Importamos los componentes que vamos a utilizar
import React, {Component} from "react"
import { Link } from "react-router-dom";
import Cantantes from "../Canciones/Canciones";
import Albumes from "../Albumes/Albumes";
import './SeccionA.css'

//Creamos el componente con estado.
class secciona extends Component{
    constructor(){
        super();
        //Declaramos los valores iniciales del estado del componente
        this.state = {
            albums: [],
            backup: [],
            canciones: [],
            backupB: [],
        }
    }
    //Buscamos en la API 5 elementos para cada valor del estado y lo actualizamos.
    componentDidMount(){
        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart')
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
    //Renderizamos el código
    render(){
        return(
            <section>
                <h2 className="Titulo">Canciones más populares</h2>
                
                <section className="section">
                {this.state.canciones.length !== 0? //Si el estado de canciones es distinto de 0 creamos con map la cantidad de elementos con props
                    this.state.canciones.map((elm, idx) => <Cantantes key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name} id={elm.id}/>)
                :
                <h2>Cargando...</h2>
                }
                
                </section>
                <p><Link to='/verTodasCanciones' >VerTodasCanciones</Link></p>
                <br/>
                <h2 className="Titulo">Albumes más populares</h2>
                <section className="section">
                    {this.state.albums.length !== 0?
                        this.state.albums.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover} artista={elm.artist.name} id={elm.id} />)
                        :
                        <h2>Cargando...</h2>
                    } 
                </section>
                <p><Link to='/verTodosAlbums' >Ver todos los albums</Link></p>
            </section>
        )
    }
}

export default secciona