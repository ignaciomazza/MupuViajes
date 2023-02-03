import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Viaje = () => {

    const [viajes, setViajes] = useState([]);
    const params = useParams();
    const viaje = params ? viajes.filter((item) => item.id === params.id) : viajes

    const [form, setForm] = useState(false);
    const [viajeId, setViajeId] = useState(params.id);


    function aparecerForm (valor) {
      if (valor){
        setForm(false);
      }else{
        setForm(true);
      }
    }

    const [formulario, setFormulario] = useState({
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
      reserva: "",
      viajeForm: ""
    });
  
    const {email, nombre, apellido, telefono, reserva, viajeForm } = formulario;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormulario({
          ...formulario,
          [name]: value,
          viajeForm: viaje[0]
      });
    }
  
    const setInFireBase = async (email, nombre, apellido, telefono, reserva, viajeForm) => {
      if (email != "" && nombre != "" && apellido != "" && telefono != "" && reserva != "") {
        try {
          const data = collection(db, "reservas");
          const col = await addDoc(data, email, nombre, apellido, telefono, reserva, viajeForm);
          alert("Su numero de orden es: " + col.id)
        } catch (error) {
          console.log(error)
        }
      }else{
        alert("Complete todos los campos para poder realizar la reserva")
      }
    }

    useEffect(() => {

        const getData = async () => {
          const data = collection(db, "viajes");
          const col = await getDocs(data);
          const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
          return res;
      }
      
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
          
        }, 1000);
      })
    
      task
        .then((resultado) => {
          setViajes(resultado)
        })
        .catch((err) => console.log(err))
    
      return () => {
          
      }
    }, [])

  return (
    <div>
        {viaje.map((item, index) => (
          <div className='viajeContainer'>
              <div className='viajePrincipalContainer' >
                <div className='datosPrincipalesViaje'>
                  <h1>{item.nombre.toUpperCase()}</h1>
                  <p>{item.descripcion}</p>
                </div>
                <div className='containerImgViaje'>
                  <img src={item.img} alt=""/>
                </div>
              </div>
              <div className='infoViaje'>
                <div className='datosViaje'>
                  <h3>DATOS DEL VIAJE</h3>
                  <p>Destino: {item.destino}</p>
                  <p>Duracion: {item.duracion}</p>
                  <p>Transporte: {item.transporte}</p>
                  <p>Hotel: {item.hotel}</p>
                  {item.alojamiento != false && <p>Alojamiento incluido</p>}
                  <p>Regimen de comida: {item.regimen}</p>
                  <p>Excursiones: {item.excursiones}</p>
                  {item.asistencia != false && <p>Asistencia al viajero</p>}
                  {item.traslado != false && <p>Traslados</p>}
                  
                </div>
                <div className='pagoViaje'>
                  <h3>PRECIO</h3>
                  <p>${item.precio}</p>
                  <h4>MEDIOS DE PAGO</h4>
                  <p>Dinero en efectivo</p>
                  <p>Debito</p>
                  <p>Credito</p>
                  <button onClick={() => aparecerForm(form)}>CONSULTAR RESERVA</button>
                </div>
              </div>
          </div>
        ))}
          {form == true && <div className='containerFormViaje'>
            <div className='containerdatosConsulta'>
                <div className='consultaViaje'>
                    <input type="text" name="nombre" className='inputConsultaText' placeholder='Nombre' onChange={handleChange}/>
                    <input type="text" name="apellido" className='inputConsultaText' placeholder='Apellido' onChange={handleChange}/>
                    <input type="text" name="telefono" className='inputConsultaText' placeholder='Telefono' onChange={handleChange}/>
                    <input type="email" name="email" className='inputConsultaText' placeholder='Email' onChange={handleChange}/>
                    <textarea name="reserva" cols="30" rows="10" className='inputConsultaMsj' placeholder='Mensaje' onChange={handleChange}></textarea>
                    <input type="button" value="Enviar" className='inputConsultaBtn' onClick={() => setInFireBase(formulario)}/>
                    <input type="button" value="cerrar" className='inputConsultaBtn' onClick={() => aparecerForm(form)}/>
                </div>
            </div>
          </div>}
        
        <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Viaje