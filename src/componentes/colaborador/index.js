import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import "./colaborador.css"
const Colaborador = (props) => {
    const {nombre, puesto, Foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() =>eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={Foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart onClick={() => like(id)} color="red"/> : <AiOutlineHeart onClick={() => like(id)}/> }
            
            
        </div>
    </div>
}

export default Colaborador