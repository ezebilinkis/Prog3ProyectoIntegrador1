function Cantantes(props) {

    
    return(
        <article>
            <img src={props.imagen} alt=""></img>
            <p>{props.nombre}</p>
            <p>{props.descripcion}</p>
            <button>ver mas</button>
            <button>detalle</button>
        </article>
    )
}

export default Cantantes