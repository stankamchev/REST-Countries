import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {defaultUrl,nameUrl,regionUrl} from "../../data"
import Country from "../Country"
import {AiOutlineSearch} from "react-icons/ai"
const Main = ({darkMode}) => {
    const [countries,setCountries] = useState([]);

    const fetchCountry = async () => {
        try {
            const response = await axios.get(defaultUrl)
            setCountries(response.data)  
        } catch (error) {
           console.error(error) 
        }
    }
    useEffect(()=>{
        fetchCountry()
    },[])

    const searchByCountry = async (query) => {
        if(query.length < 3 || query === ""){
            fetchCountry()
        } else {
            try {
                const response = await axios.get(`${nameUrl}/${query}`)
                setCountries(response.data)  
            } catch (error) {
                console.error(error)
            }
        }
    }
    const searchByRegion = async (query) => {
        if(query === ""){
            fetchCountry()
        } else {
            try {
                const response = await axios.get(`${regionUrl}/${query}`)
                setCountries(response.data)  
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className={darkMode ? "dark" : ""}>
        <div className="px-10 my-10">
            <input 
                type="text"
                onChange={(e)=>searchByCountry(e.target.value)}
                className="w-full sm:w-3/5 h-12 outline-none shadow px-12 mb-12 dark:bg-gray-600 dark:text-gray-100 dark:placeholder-gray-100"
                placeholder="Search for a country..."/>

            <select 
            className="h-12 w-1/2 bg-white dark:bg-gray-600 dark:text-gray-100 outline-none shadow px-4 mb-6"
            onChange={(e)=>searchByRegion(e.target.value)}>
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>

        <Country darkMode={darkMode} countries={countries}/>
        </div>
    )
}

export default Main
