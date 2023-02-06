import React from 'react'
import Footer from '../Footer/Footer.jsx';

const Nosotros = (props) => {

  const {logo} = props;

  return (
    <div className='containerNosotros'>
      <div className='containerDatosNosotros'>
        <img src={logo} alt="logo"/>
        <h1>Agentes de viaje certificados</h1>
        <p>10 años en Turismo para brindarte y garantizarte un servicio personalizado a la hora de viajar</p>
      </div>  
      <Footer key="Footer"/>
    </div>
  )
}

export default Nosotros