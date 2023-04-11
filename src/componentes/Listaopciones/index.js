import "./Listacomponentes.css"
//Metodo map -> nombrearrlego.map((equipo, posicion) => { return <option></option>})

const Listaopciones = (props) =>{
    

    const getCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>  
        <select value={props.valor} onChange={getCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccioanar equipo...</option>
        {props.equipo.map((equipo,index) =>  <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}
export default Listaopciones    