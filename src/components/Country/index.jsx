import React,{useEffect,useState} from 'react'
import axios from "axios"
import SingleCountry from '../SingleCountry'

const Country = ({countries,darkMode}) => {    
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
            {countries.map((item)=>{
                return(
                    <SingleCountry
                        darkMode={darkMode}
                        key={item.name}
                        flag={item.flag}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                    />
                )
            })}
        </div>
    )
}

export default Country
