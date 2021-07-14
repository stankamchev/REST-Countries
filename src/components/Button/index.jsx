import React from 'react'
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
const Button = () => {
    return (  
            <Link to={"/"} className="cursor-pointer">
                <button className="bg-white w-24 h-8 rounded shadow-md my-10">
                    {/* <i><FiArrowLeft/></i> */}         
                    Back
                </button>
            </Link>
    )
}

export default Button
