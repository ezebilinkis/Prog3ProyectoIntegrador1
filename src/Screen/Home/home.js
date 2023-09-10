import Formulario from "../../Components/Formulario_busqueda/Formulario"
import React, {Component} from "react"
import Secciona from "../../Components/SeccionA/SeccionA"
import Seccionb from "../../Components/SeccionB/SeccionB"

class Home extends Component{
    render(){
        return(
        <div>
            <Formulario/>
            <br/>
            <Secciona/>
            <br/>
            <Seccionb/>
        </div>
        )
    }
}
    

export default Home