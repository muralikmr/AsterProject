import React from 'react'
import "../styles/home.css"
import {AiFillGoogleCircle , AiFillInstagram ,AiFillAmazonCircle} from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'




const Home = () => {
  return (
   <div id='home'>
    <div className='home1' >
      <div className='home1-inner'>
      <h1>Hotel Taj</h1>
      <p>Place of family food</p>
      </div>
    </div>
    <main className='main'>
    <div className='home2' id='about'>
      <h1>ABOUT</h1>
      <p> Enjoy our elegant 40 m² guest rooms, designed in warm beige tones and tailored to the needs of private and business travelers alike.All rooms have a large marble bathroom, a double bed, air conditioning, an additional work area with  free internet access and a walk-in closet. Our superior rooms impress with a wonderful view of the city and the adjacent park.</p>
         <button className='btn'>Read more...</button>
    </div>
    </main>
    <div className='home3' id='brands'>
      <div className='home3-inner'>
        <h1>Sponsered by</h1>
        <div className="brands">
          <div className="brand" style={{animationDelay:"0.25s"}}>
          <AiFillAmazonCircle className='icons'/>
          <p>Amazon</p>
          </div>
          <div className="brand" style={{animationDelay:"0.50s"}}>
          <AiFillInstagram className='icons'/>
          <p>Instagram</p>
          </div>
          <div className="brand" style={{animationDelay:"0.75s"}}>
          <AiFillGoogleCircle className='icons' />
          <p>Google</p>
          </div>
          <div className="brand" style={{animationDelay:"1s"}}>
          <SiFlipkart className='icons' />
          <p>Flipkart</p>
          </div>
        </div>
      </div>
    </div>
    
   
  
   </div>
   
  )
}

export default Home