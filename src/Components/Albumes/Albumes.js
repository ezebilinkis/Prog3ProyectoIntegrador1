// Album.js
import './Albumes.css'
function Albumes(props) {

    
    return(
        <article>
            <img src={props.imagen} alt=""></img>
            <p>{props.nombre}</p>
            <p>{props.descripcion}</p>
            <button>Ver mas</button>
            <button>Detalle</button>
        </article>
    )
}

export default Albumes