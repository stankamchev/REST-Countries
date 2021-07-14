import React,{useEffect,useState} from 'react'
import axios from "axios"
import SingleCountry from '../SingleCountry'
const Country = () => {
    const [countries,setCountries] = useState([])
    const url = "https://restcountries.eu/rest/v2/all"
    useEffect(()=>{
        async function fetchCountry(){
        try {
            const response = await axios.get(url)
            setCountries(response.data)  
        } catch (error) {
           console.error(error) 
        }
    }
    fetchCountry()
    },[])
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
