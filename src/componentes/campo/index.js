import "./campo.css"
import { useState } from "react"


const Campo = (props) => {
    const getValor = (e) =>{
        props.setValor(e.target.value)
    }
    const {type = "text"} = props
    const placeholdermodificada = `${props.placeholder}...`

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholdermodificada} required={props.required} onChange={getValor} value={props.valor} type={type}/>
    </div>
}

export default Campo