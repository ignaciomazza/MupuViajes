import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselApp = (props) => {

    const [index, setIndex] = useState(0);
    const {CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselFifth} = props

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselFirst} alt="First slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar pos'>EXPLORA</h3>
                      <p className='ocultar pos'>LO SALVAJE</p>
                      <div className='gradient'></div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselSecond} alt="Second slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar pos'>VIVI</h3>
                      <p className='ocultar pos'>LA EXPERIENCIA</p>
                      <div className='gradient'></div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselThird} alt="Third slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar pos'>ANIMATE</h3>
                      <p className='ocultar pos'>A LA AVENTURA</p>
                      <div className='gradient'></div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselFourth} alt="First slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar pos'>DISFRUTA</h3>
                      <p className='ocultar pos'>EL PAISAJE</p>
                      <div className='gradient'></div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselFifth} alt="First slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar pos'>VIAJA</h3>
                      <p className='ocultar pos'>JUNTO A MUPUVIAJES</p>
                      <div className='gradient'></div>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default CarouselApp