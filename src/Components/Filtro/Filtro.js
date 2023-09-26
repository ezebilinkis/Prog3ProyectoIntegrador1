//Importamos componentes
import React, { Component } from "react";

//Creamos el componente filtro y procesamos las props
class Filtro extends Component{
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
        () => this.props.filtrar(this.state.valor)
        )
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <label>Buscador:</label>
                <input type="text" value={this.state.valor} onChange={(event)=> this.controlarCambios(event)}></input>
                <input type="submit" value='Submit'/>
            </form>
        )
    }
}

export default Filtro