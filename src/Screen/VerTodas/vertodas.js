import Formulario from "../../Components/Formulario_busqueda/Formulario"
import React, {Component} from "react"
import VerTodasCanciones from "../../Components/VerTodasCanciones/VerTodasCanciones"

class verTodas extends Component{
    render(){
        return(
        <div>
            <Formulario/>
            <br/>
            <VerTodasCanciones/>
            <br/>
           
        </div>
        )
    }
}
    

export default verTodas