import React,{useState,useEffect} from 'react'
import axios from "axios"
import { nameUrl } from "../../data"
import { useParams } from 'react-router'
import CountryPageItem from '../CountryPageItem'
import Button from '../Button'
const CountryPage = () => {

    const {id} = useParams()
    const [country,setCountry] = useState([])
    const fetchCountry = async () => {
        try {
            const response = await axios.get(`${nameUrl}/${id}`)
            setCountry(response.data)  
        } catch (error) {
           console.error(error) 
        }
    }

    useEffect(() => {
        fetchCountry()
    }, [])
    
    return (
        <div className="h-screen">
            <div className="mx-10 ">
            <Button/>
            <div>
            {country.map((item,key)=>{
                return(
                    <div key={key}>
                    <CountryPageItem
                        // darkMode={darkMode}
                        flag={item.flag}
                        nativeName={item.nativeName}
                        region={item.region}
                        subregion={item.subregion}
                        capital={item.capital}
                        population={item.population}
                        topLevelDomain={item.topLevelDomain}
                        currencies={item.currencies}
                        languages={item.languages}
                        borders={item.borders}
                    />
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
}

export default CountryPage
