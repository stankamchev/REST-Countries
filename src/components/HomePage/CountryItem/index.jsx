import React from 'react'
import {Link} from "react-router-dom"
import Paragraph from "../../Paragraph"
const CountryItem = (props) => {
    return (
        <div>
        <article className="flex justify-center ">
        <div className="flex-col w-4/6 xl:w-64 max-w-sm bg-white dark:bg-gray-600 rounded-md mb-10 shadow-md cursor-pointer">
            <Link to={`/country/${props.name}`}>
            <img src={props.flag} alt={props.name} />
            <div className="px-5 pb-5">
            <h1 className="my-3 font-bold text-2xl dark:text-gray-100">{props.name}</h1>

                <Paragraph desc={"Population"} value={props.population}/>
                <Paragraph desc={"Region"} value={props.region}/>
                <Paragraph desc={"Capital"} value={props.capital}/>
                
            </div>
            </Link>
            </div>
              
        </article>
        </div>
    )
}

export default CountryItem
