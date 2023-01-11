import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from '../img/logo.png';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Whatsapp from '../img/whatsapp.svg';
import CarouselFirst from '../img/1.png';
import CarouselSecond from '../img/2.png';
import CarouselThird from '../img/3.png';
import NavBar from '../components/NavBar/NavBar.jsx';
import Inicio from '../components/Inicio/Inicio.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Contacto from '../components/Contacto/Contacto.jsx';
import Nosotros from '../components/Nosotros/Nosotros.jsx';
import Viajes from '../components/Viajes/Viajes.jsx';
import Viaje from '../components/Viaje/Viaje.jsx';

const routes = () => {
  return (
    <BrowserRouter>
      <NavBar key="Nav" logo={logo}/>
      <Routes>
          <Route path="/" element={<Inicio key="Inicio" CarouselFirst={CarouselFirst} CarouselSecond={CarouselSecond} CarouselThird={CarouselThird}/>} />
          <Route path="/contacto" element={<Contacto key="Contacto"/>}/>
          <Route path="/nosotros" element={<Nosotros key="Nosotros" logo={logo}/>}/>
          <Route path="/category/:id/provincia/:prov" element={<Viajes key={"Viajes"}/>}/>
          <Route path="/travel-detail/:id" element={<Viaje key={"Viaje"}/>}/>

      </Routes>
      {/* <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/> */}
    </BrowserRouter>
  )
}

export default routes