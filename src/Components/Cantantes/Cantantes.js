import './Cantantes.css'
function Cantantes(props) {

    
    return(
        <article>
            <img src={props.imagen} alt=""></img>
            <p>{props.nombre}</p>
            <p>{props.descripcion}</p>
            <button>Ver mas</button>
            <button>Detalle</button>
            <button><i class="fa-solid fa-heart"></i></button>
        </article>
    )
}

export default Cantantes