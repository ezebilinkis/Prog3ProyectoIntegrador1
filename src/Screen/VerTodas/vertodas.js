import React, {Component} from "react"
import VerTodasCanciones from "../../Components/VerTodasCanciones/VerTodasCanciones"
import VerTodosAlbums from "../../Components/VerTodosAlbums/VerTodosAlbums"
class verTodas extends Component{
    render(){
        return(
        <div>
            <VerTodasCanciones/>
            <br/>
            <VerTodosAlbums/>
        </div>
        )
    }
}
    

export default verTodas