import React from 'react'
import {FaRegMoon,FaMoon} from "react-icons/fa"
const Navbar = ({darkMode,setDarkMode}) => {
    const darkModeToggler = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={darkMode ? "dark" : ""}>
        <section className="flex bg-white dark:bg-gray-600 justify-between shadow-sm h-16 px-10 items-center z-10">
            <h1 className="font-bold text-xl dark:text-gray-100">Where in the world ?</h1>
            <span 
            onClick={()=>darkModeToggler()}
            className="flex cursor-pointer dark:text-gray-100">
                <i className="self-center mr-2 dark:text-gray-100">
                    <FaRegMoon/>
                </i> 
                Dark mode
            </span>
        </section>
        </div>
    )
}

export default Navbar
