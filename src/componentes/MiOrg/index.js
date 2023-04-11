import "./Miorg.css"
const MiOrg = (props) => {
    //estado - hooks
    //UseState
    //const [mostrar, actualizarmostrar] = useState(true)
    //const ManejarClicl = () =>{
       // actualizarmostrar(mostrar)}


    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.MostrarCambiar}></img>
    </section>
}

export default MiOrg