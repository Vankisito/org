import "./Formulario.css"
import Campo from "../campo"
import Listaopciones from '../Listaopciones';
import Boton from "../bottom";
import { useState } from "react";


const Formulario = (props) =>{
    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [Foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")
    const {registrarColaborador, crearEquipo} = props

    const ManejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            Foto,
            equipo
        }
       props.registrarColaborador(datosAEnviar)
        }
    
    const getNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

   

    return <section className="formulario">
        <form onSubmit={ManejarEnvio}>
            <h2 className="titulo__formulario">Rellena el formulario para crear un colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingrese su nombre" required valor={nombre} setValor={setNombre}/>
            <Campo titulo="Puesto" placeholder="Ingrese su puesto" required valor={puesto} setValor={setPuesto}/>
            <Campo titulo="Foto" placeholder="Ingrese su enlace de foto" required valor={Foto} setValor={setFoto}/>
            <Listaopciones valor={equipo} setValor={setEquipo} equipo={props.equipo}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={getNuevoEquipo}>
            <h2 className="titulo__formulario">Rellena el formulario para crear un colaborador.</h2>
            <Campo titulo="Titulo" placeholder="Ingrese su titulo" required valor={titulo} setValor={setTitulo}/>
            <Campo titulo="Color" placeholder="Ingrese su color en HEX" required valor={color} setValor={setColor} type="color"/>
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario