import React,{useEffect,useState} from 'react'
import axios from "axios"
import SingleCountry from '../SingleCountry'

const Country = ({countries}) => {    
    return (
        <div>
            {countries.map((item)=>{
                return(
                    <SingleCountry
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
