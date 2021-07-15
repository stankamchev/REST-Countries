import React from 'react'
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
const Button = () => {
    return (  
        <div>
            <Link to={"/"} className="cursor-pointer">
                <button className="bg-white dark:bg-gray-600 flex items-center justify-center w-24 h-8 rounded shadow-md my-10">
                <i className="pr-2"><FiArrowLeft/></i>         
                    Back
                </button>
            </Link>
        </div>
    )
}

export default Button
