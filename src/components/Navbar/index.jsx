import React from 'react'
import Logo from "./Logo"
import DarkModeButton from './DarkModeButton'
const Navbar = ({darkMode,setDarkMode}) => {
    return (
        <div>
        <section className="flex bg-white dark:bg-gray-600 justify-between shadow-sm h-16 px-10 items-center z-10">
            <Logo/>
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/>
        </section>
        </div>
    )
}

export default Navbar
