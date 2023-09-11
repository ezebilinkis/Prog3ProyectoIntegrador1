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
            <button><i className="fa-solid fa-heart"></i></button>
            <button hidden><i className="fa-regular fa-heart"></i></button>
        </article>
    )
}

export default Albumes