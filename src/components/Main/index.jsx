import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Main = () => {
    return (
        <div className="px-10 my-10">
            <form>
                <input 
                type="text" 
                className="w-full sm:w-3/5 h-12 outline-none shadow-sm px-12 mb-12"
                placeholder="Search for a country..."/>
            </form>
            <select className="h-12 w-1/2 bg-white px-4 mb-6">
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="America">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Main
