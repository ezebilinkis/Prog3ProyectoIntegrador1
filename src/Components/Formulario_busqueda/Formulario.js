import React, {Component} from 'react'
import './Formulario.css'

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: ''
        }
    }
    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        
        )
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <input placeholder="Busca artistas y canciones" type="text" value={this.state.valor} onChange={(event)=> this.controlarCambios(event)}></input>
                <input type="submit" value='Submit'/>
            </form>
        )
    }
}

export default Formulario