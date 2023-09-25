//Importamos el objeto component de react
import React, {Component} from "react"
import Secciona from "../../Components/SeccionA/SeccionA"
import Cantantes from "../../Components/Canciones/Canciones"
import Albumes from "../../Components/Albumes/Albumes"

//Creamos un componente con estado
class Home extends Component{
    //el constructor sirve para declarar el estado inicial y manejar las props
    constructor(){
        //Funcion que sirve para utilizar las props que recibe del componente padre
        super()
        //Declaramos el estado inicial
        this.state = {
            valor: '',
            albums: [],
            canciones: [],
            buscar: true
        }
    }
    //Metodo que actualiza el estado del valor 
    controlarCambios(event){
        //Usamos this.setState para actualizar el estado del componente
        this.setState({
            valor: event.target.value
        } 
        )
    }
    //Metodo para que se evite el envio del formulario, pero que se realice la busqueda
    evitarSubmit(event){
        if (this.state.valor !== '' ) {
            fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${this.state.valor}`)
            .then(res => res.json())
            .then(data => this.setState({canciones: data.data}))
            .catch(err => console.log(err))

            fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${this.state.valor}`)
            .then(res => res.json())
            .then(data =>  this.setState({albums: data.data}) )
            .catch(err => console.log(err))
            
        }
        //Actualizamos el estado
        this.setState({
            buscar: false
        })
        event.preventDefault()
    }


    render(){
        return(
        <div>
            
            <form className="form" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input value={this.state.valor} onChange={(event)=> this.controlarCambios(event)} placeholder="Busca artistas y canciones" type="text" className=".input" required></input>
                <input type="submit" value='Submit' className="input"/>
            </form>
            <br/>
            {/* If que chequea que el usuario haya buscado algo o no */}
            {this.state.buscar?
            <Secciona/>
            :
            <section>
                <h2 className="Titulo">Canciones más populares</h2>
                {this.state.canciones.length !== 0?
                <section className="section">
                        {/* Map recibe un callback, dos parametros: el primero representa cada elemento del array y el segundo es un indice */}
                        {this.state.canciones.map((elm, idx) => <Cantantes key={idx} nombre={elm.title} imagen={elm.album.cover}  artista={elm.artist.name} id={elm.id}/>)}

    
                        
                </section>
                :
                <h2>Cargando...</h2>
                }
                <br/>
                <h2 className="Titulo">Albumes más populares</h2>
                <section className="section">
                    {this.state.albums.length !== 0?
                        this.state.albums.map((elm, idx) => <Albumes key={idx} nombre={elm.title} imagen={elm.cover} artista={elm.artist.name} id={elm.id} />)
                        :
                        <h2>Cargando...</h2>
                    } 
                </section>
            </section>
            }
            
            <br/>
           
        </div>
        )
    }
}
    

export default Home