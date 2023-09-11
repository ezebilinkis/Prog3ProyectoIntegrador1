import Formulario from "../../Components/Formulario_busqueda/Formulario"
import React, {Component} from "react"
import Secciona from "../../Components/SeccionA/SeccionA"


class Home extends Component{
    render(){
        return(
        <div>
            <Formulario/>
            <br/>
            <Secciona/>
            <br/>
           
        </div>
        )
    }
}
    

export default Home