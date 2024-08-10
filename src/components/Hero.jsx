import React from 'react'
import { amazonLogo, shoeImg } from '../assets'

const Hero = () => {
  return (
    <section className='grid grid-cols-2 items-center max-lg:grid-cols-1 gap-4 font-poppins pl-20 py-10'>
        <div className="shoe-text flex-center">
            <h1 className='hero-title'>
            NIKE EVO <br />
            GEN Z V2 <br />
            SPACER
            </h1>
            <p className='hero-para'>
            NIKE EVO GEN Z V2 SPACER SUCCESOR OF NIKE EVO GEN Z SPACER WITH VIOLET AND BLUE VARIANT COMES WITH THE BEST SHOLES TO GIVE YOUR FEET COMFORT.
            </p>
            <div className="btn-pos">
                <button className='btn'>Shop Now</button>
                <button className='btn-var btn-hover'>Varients</button>
            </div>
            <p className='hero-para'>Also Available On</p>
            <img src={amazonLogo} className='logo-pos' />
        </div>
        <div className="shoe-img w-[500px]">
            <img src={shoeImg} />
        </div>
    </section>
  )
}

export default Hero
