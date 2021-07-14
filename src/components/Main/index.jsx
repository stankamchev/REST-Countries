import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Main = () => {
    return (
        <div className="px-10 my-10">
            <form>
                <input 
                type="text" 
                className="w-full sm:w-3/5 h-12 outline-none shadow-sm px-12"
                placeholder="Search for a country..."/>
            </form>
        </div>
    )
}

export default Main
