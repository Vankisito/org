import Header from './componentes/Header/index';
import { v4 as uuidv4 } from 'uuid';
import Formulario from './componentes/Formulario/Formulario';
import './App.css';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';
import Colaborador from './componentes/colaborador';

function App() {  
  const [MostrarF,VerFormulario] = useState(true)
  const [Colaboradores, actualizarColaborador] = useState([{
    id: uuidv4(),
    Foto: "https://github.com/Vankisito.png",
    equipo:"FrontEnd",
    nombre: "Santiago",
    puesto: "Desarrollador",
    fav: true}
  ])
  //Lista equipos
  const  [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo:"Programacion",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },
    {
      id: uuidv4(),
      titulo:"FrontEnd",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"DevOps",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
    
    
  ])

  const MostrarCambiar = () => {
    VerFormulario(!MostrarF)
  }
  
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaborador([...Colaboradores,colaborador])
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, nuevoEquipo])
  }

  
  const eliminarColaborador = (id) => {
    console.log(id)
    const nuevosColaboradores = Colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaborador(nuevosColaboradores)
  }

  //acutualiza el color del equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color  
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const like = (id) => {
    const Favoritos = Colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(Favoritos)
  }

  return (
    <div >
      <Header/>
      {MostrarF ? <Formulario equipo={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo }/> : <></>  }
      <MiOrg MostrarCambiar={MostrarCambiar} />
      {
      equipos.map((data) => <Equipo datos={data} key={data.titulo} colaboradores={Colaboradores.filter(colaborador => colaborador.equipo === data.titulo) } eliminarColaborador= {eliminarColaborador} actualizarColor={actualizarColor} like={like}/>)
      }
      <Footer/>
    </div>
  );
}

export default App;
