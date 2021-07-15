import React from 'react'
import {FaRegMoon,FaMoon} from "react-icons/fa"
const DarkModeButton = ({darkMode,setDarkMode}) => {
    const darkModeToggler = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>
          <span 
            onClick={()=>darkModeToggler()}
            className="flex cursor-pointer dark:text-gray-100">
                <i className="self-center mr-2 dark:text-gray-100">
                    {darkMode ? <FaMoon/> : <FaRegMoon/>}
                </i> 
                Dark mode
          </span>   
        </>
    )
}

export default DarkModeButton
