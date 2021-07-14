import axios from 'axios'
import React,{useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Main = () => {
    const [query,setQuery] = useState("")

    const searchByCountry = async () => {
        if(query.lenght <= 3 || query === ""){
            return
        } else {
            const response = await axios.get("")
        }
    }

    return (
        <div className="px-10 my-10">
            <input 
                type="text"
                onChange={(e)=>setQuery(e.target.value)}
                value={query} 
                className="w-full sm:w-3/5 h-12 outline-none shadow-sm px-12 mb-12"
                placeholder="Search for a country..."/>

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
