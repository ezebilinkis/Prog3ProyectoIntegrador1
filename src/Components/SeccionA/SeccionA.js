import React, {Component} from "react"
import Cantantes from "../Cantantes/Cantantes";
import './SeccionA.css'
class secciona extends Component{

    constructor(){
        super();
        this.state = {
            cantantes: [],
            backupB: [],
            albums: [],
            backup: []
        }
    }
    componentDidMount(){
        console.log('Monto');
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(res => res.json())
        .then( data => this.setState({
            albums: data.albums.data.slice(0,5),
            backup: data.albums.data.slice(0,5),
            cantantes: data.artists.data.slice(0,5),
            backupB: data.artists.data.slice(0,5)
        }))
        .catch(e => console.log(e))
    }
    componentDidUpdate(){

    }
    render(){
        console.log(this.state.cantantes);
        return(
            <section>
                <h1 className="Titulo">Artistas más populares</h1>
                <section className="section">
                    {
                        this.state.cantantes.map((elm, idx) => <Cantantes key={idx} nombre={elm.name} imagen={elm.picture}  />)
                    } 
                </section>
                <br/>
                <section>
                
                </section>
            </section>
        )
    }
}

export default secciona