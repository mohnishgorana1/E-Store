import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';

import NavLinks from './NavLinks';



const themes = {
    night : 'night',
    winter : 'winter',
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter
}


function Navbar() {
    const [theme, setTheme] = useState(getThemeFromLocalStorage())

    const handleTheme = () => {
        const {winter, night} = themes;
        const newTheme = ( theme === winter ? night : winter ) 
        setTheme(newTheme)
    }

    useEffect( () => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <nav className='bg-base-200'>
       <div className="navbar align-element">
            <div className="navbar-start">
                <NavLink to='/' className='hidden lg:flex btn btn-primary'>Comfy Store</NavLink>

                {/* DROPDOWN */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 lg:hidden">
                        <FaBarsStaggered className='h-6 w-6' />
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks />
                    </ul>
                </div>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <NavLinks />
                </ul>
            </div>

            <div className="navbar-end">
                {/* theme setup */}

                <label className='swap swap-rotate'>
                    <input type="checkbox" onChange={handleTheme} />
                    <BsSunFill className='swap-on h-4 w-4' />
                    <BsMoonFill className='swap-off h-4 w-4' />
                </label>

                {/* cart link */}
                <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                    <div className="indicator">
                        <BsCart3 className='h-6 w-6' />
                        <span className='badge badge-sm badge-primary indicator-item'>
                            0
                        </span>
                    </div>
                </NavLink>
            </div>

        </div>
    </nav>
    
  )
}

export default Navbar
