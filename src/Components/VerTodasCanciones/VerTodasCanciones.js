import React, {Component} from "react"
import Canciones from "../Canciones/Canciones";
import './VerTodasCanciones.css'
import Filtro from "../Filtro/Filtro";


class VerTodasCanciones extends Component{

    constructor(){
        super();
        this.state = {
            canciones: '',
            backupB: '',
            index:0
        }
    }
    componentDidMount(){
        
        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart?index=0&limit=10')
        .then(res => res.json())
        .then( data => this.setState({
            canciones: data.tracks.data,
            backupB: data.tracks.data,
        }) )
        .catch(e => console.log(e))
    }
    componentDidUpdate(){
        
    }

    cargarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart?index=${this.state.index + 10}&limit=10`)
        .then(res => res.json())
        .then((data) =>{this.setState({
            //Traemos nuevas canciones y las agregamos al array que ya teniamos, con el concat se agregan 10 canciones
            canciones: this.state.canciones.concat(data.tracks.data),
            backupB: this.state.backupB.concat(data.tracks.data),
            index: this.state.index + 20
        })})
        .catch(err => console.log(err))
    }
    filtrar(textoAFiltrar){
        let filtrado = this.state.backupB.filter((elm)=>elm.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            canciones: filtrado
        })
    }
    render(){
        return (
            <section>
                {
                this.state.canciones !== ''?
                <>
                <h2 className="Titulo">Todas las canciones</h2>
                <Filtro filtrar={(textoAFiltrar)=>this.filtrar(textoAFiltrar)} />
                <section className="section">
                    {
                        this.state.canciones.map((elm, idx) => <Canciones key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name} id={elm.id}/>)
                    } 
                </section>
                <button onClick={()=> this.cargarMas()} >Cargar Mas</button>
                </>:
                <h2>Cargando...</h2>
                }
                
            </section>
        )}
        }
export default VerTodasCanciones