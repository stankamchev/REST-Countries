import React from 'react'
import {FaRegMoon,FaMoon} from "react-icons/fa"
const Navbar = () => {
    return (
        <section className="flex bg-white justify-between shadow-sm h-16 px-10 items-center z-10">
            <h1 className="font-bold text-xl">Where in the world ?</h1>
            <span className="flex cursor-pointer">
                <i className="self-center mr-2"><FaRegMoon/></i> 
                Dark mode
            </span>
        </section>
    )
}

export default Navbar
