import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'
const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    //" https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    //"https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50"
    
]

const Banner = () => {
  return (
      
         
              data.map((imag,i)=>{
                  return (
                      <>
                      <img src={imag} alt='' className='banner_img'/>
                      </>
                  )
              })
        
            
    
        
  )
}

export default Banner
