function Solicitud(props){
    const {Children} = props
    return(
        <div>
            <h1> Tu solicitud es ...</h1>
            <p> {Children}</p>
        <button onClick={props.onDelete}>Eliminar solicitud</button>
        
        </div>
    )
}
export default Solicitud
