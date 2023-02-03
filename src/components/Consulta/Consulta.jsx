import React, { useState } from 'react';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';
import db from '../../services'
import { collection, addDoc } from 'firebase/firestore';

const Consulta = () => {

  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
    apellido: "",
    telefono: "",
    consulta: ""
  });

  const {email, nombre, apellido, telefono, consulta } = formulario;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  const setInFireBase = async (email, nombre, apellido, telefono, consulta) => {
    if (email != "" && nombre != "" && apellido != "" && telefono != "" && consulta != "") {
      try {
        const data = collection(db, "consulta");
        const col = await addDoc(data, email, nombre, apellido, telefono, consulta);
        alert("Su numero de orden es: " + col.id)
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Complete todos los campos para poder realizar la consulta")
    }
  }

  return (
    <div className='containerColumnConsulta'>
      <div className='containerRowConsulta'>
        <div className='encabezadoConsulta'>
              <h1 className='tituloConsulta'>Hacenos tu consulta</h1>
          </div>
          <div className='consulta'>
              <input type="text" name="nombre" className='inputConsultaText' placeholder='Nombre' onChange={handleChange}/>
              <input type="text" name="apellido" className='inputConsultaText' placeholder='Apellido' onChange={handleChange}/>
              <input type="text" name="telefono" className='inputConsultaText' placeholder='Telefono' onChange={handleChange}/>
              <input type="email" name="email" className='inputConsultaText' placeholder='Email' onChange={handleChange}/>
              <textarea name="consulta" cols="30" rows="10" className='inputConsultaMsj' placeholder='Consulta' onChange={handleChange}></textarea>
              <input type="button" value="Enviar" className='inputConsultaBtn z' onClick={() => setInFireBase(formulario)}/>
          </div>
      </div>
        <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Consulta