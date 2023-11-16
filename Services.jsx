import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/services.css'
const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showArrows={false} showThumbs={false} interval={2000}
       transitionTime={1000} >
        <div>
          <img src="\Images\nature.jpg" alt="" />
          <p className='legend'>industry</p>
        </div>
        <div>
          <img src="\Images\service1.jpg" alt="" />
          <p className='legend'>metro</p>
        </div>
        <div>
          <img src="\Images\service2.jpg" alt="" />
          <p className='legend'>river</p>
        </div>
        <div>
          <img src="\Images\gg.jpg" alt="" />
          <p className='legend'>water</p>
        </div>

      </Carousel>
    </div>
  )
}

export default Services
