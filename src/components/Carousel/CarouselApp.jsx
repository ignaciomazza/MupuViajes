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
                      <h3 className='ocultar'>EXPLORA</h3>
                      <p className='ocultar'>LO SALVAJE</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselSecond} alt="Second slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar'>VIVI</h3>
                      <p className='ocultar'>LA EXPERIENCIA</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselThird} alt="Third slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar'>ANIMATE</h3>
                      <p className='ocultar'>A LA AVENTURA</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselFourth} alt="First slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar'>EXPLORA</h3>
                      <p className='ocultar'>LO SALVAJE</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" src={CarouselFifth} alt="First slide"/>
                  <Carousel.Caption>
                      <h3 className='ocultar'>EXPLORA</h3>
                      <p className='ocultar'>LO SALVAJE</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default CarouselApp