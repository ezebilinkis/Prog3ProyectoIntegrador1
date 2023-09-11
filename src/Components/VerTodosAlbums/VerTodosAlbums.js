import React, {Component} from "react"
import Albumes from "../Albumes/Albumes";
import Filtro from "../Filtro/Filtro";

class VerTodosAlbums extends Component{

    constructor(){
        super();
        this.state = {
            Albumes: '',
            backup: '',
            index:0
        }
    }
    componentDidMount(){
        console.log('Monto');
        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart?index=0&limit=10')
        .then(res => res.json())
        .then( data => this.setState({
            Albumes: data.albums.data,
            backup: data.albums.data,
        }) )
        .catch(e => console.log(e))
    }
    componentDidUpdate(){

    }

    cargarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart?index=${this.state.index + 10}&limit=10`)
        .then(res => res.json())
        .then((data) =>{this.setState({
            Albumes: this.state.Albumes.concat(data.albums.data),
            backup: this.state.backup.concat(data.albums.data),
            index: this.state.index + 20
        })})
        .catch(err => console.log(err))
    }
    
    filtrar(textoAFiltrar){
        let filtrado = this.state.backup.filter((elm)=>elm.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            Albumes: filtrado
        })
    }

    

    
    render(){
        return (
            <section>
                {this.state.Albumes !== ''?
                <>
                
                <h2 className="Titulo">Todas los albums</h2>
                <Filtro filtrar={(textoAFiltrar)=>this.filtrar(textoAFiltrar)}  />
                <section className="section">
                    {
                        this.state.Albumes.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover} artista={elm.artist.name} id={elm.id} />)                    
                    } 
                </section>
                <button onClick={()=> this.cargarMas()} >Cargar Mas</button>
                </>:
                <h2>Cargando...</h2>
                }
                
            </section>
        )}}
    
export default VerTodosAlbums