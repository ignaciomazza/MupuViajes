import React from 'react';
import Carousel from '../Carousel/CarouselApp.jsx';
import Categorias from '../Categorias/Categorias.jsx';
import Consulta from '../Consulta/Consulta.jsx';

export const Inicio = (props) => {

  const {CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselFifth} = props

  return (
    <div>
        <Carousel key="Carousel" CarouselFirst={CarouselFirst} CarouselSecond={CarouselSecond} CarouselThird={CarouselThird} CarouselFourth={CarouselFourth} CarouselFifth={CarouselFifth}/>
        <Categorias key="Categorias"/>
        <Consulta key="Consulta"/>
    </div>
  )
}

export default Inicio