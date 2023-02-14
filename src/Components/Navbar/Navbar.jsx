import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png'
import search from '../../assets/logo1.svg'
import Avatar from '../../Components/Avatar/Avatar'
import Button from '../../Components/Button/Button'

 const Navbar = () => {
     var User = null
    return (
        <nav>
        <div className='navbar'>
            <Link to ='/' className='nav-item nav-logo' >
                <img src ={logo} alt ='logo'  width="200"/>               
                 </Link>
                 <Link to ='/' className='nav-item nav-btn' >About </Link>
                 <Link to ='/' className='nav-item nav-btn' >Products  </Link>
                 <Link to ='/' className='nav-item nav-btn' >For Teams </Link>
                 <form >
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18"/>
                 </form>
                 { User === null ? 
                 <Link to ='/Auth' className='nav-item nav-links' >Log In </Link> :
                 <>
                 <Link to = '/'><Avatar>M</Avatar></Link>
                 <Button>Log Out</Button>
                 </>
                 }
        </div>
        </nav>
    )
 }
 export default Navbar