import React from 'react'
import {Link} from "react-router-dom"
const Logo = () => {
    return (
        <>
            <Link to={"/"}>
                <h1 className="font-bold md:text-xl dark:text-gray-100">
                    Where in the world ?
                </h1>      
            </Link>
        </>
    )
}
export default Logo
