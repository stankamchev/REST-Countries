import React from 'react'
import {Link} from "react-router-dom"
import Paragraph from "../../Paragraph"
const CountryItem = ({darkMode,flag,name,population,region,capital}) => {
    return (
        <div>
        <article className="flex justify-center ">
        <div className="flex-col w-4/6 xl:w-64 max-w-sm bg-white dark:bg-gray-600 rounded-md mb-10 shadow-md cursor-pointer">
            <Link to={`/country/${name}`}>
            <img src={flag} alt={name} />
            <div className="px-5 pb-5">
            <h1 className="my-3 font-bold text-2xl dark:text-gray-100">{name}</h1>

                <Paragraph desc={"Population"} value={population}/>
                <Paragraph desc={"Region"} value={region}/>
                <Paragraph desc={"Capital"} value={capital}/>
                
            </div>
            </Link>
            </div>
              
        </article>
        </div>
    )
}

export default CountryItem
