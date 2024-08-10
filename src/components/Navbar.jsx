import { brandLogo } from '../assets'

const Navbar = () => {
  return (
    <>
    <nav className='w-full h-[80px] nav'>
        <div className="logo">
            <img src={brandLogo} />
        </div>
        <ul className='nav-links'>
         <li>MENU</li>
         <li>VARIANTS</li>
         <li>ABOUT</li>
         <li>CONTACT</li>
        </ul>
        <button className='btn p-1'>Login</button>
    </nav>
    </>
  )
}

export default Navbar
