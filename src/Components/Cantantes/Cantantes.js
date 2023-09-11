import './Cantantes.css'
function Cantantes(props) {

    
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

export default Cantantes