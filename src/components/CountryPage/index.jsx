import React,{useState,useEffect} from 'react'
import axios from "axios"
import { nameUrl } from "../../data"
import { useParams } from 'react-router'
import CountryPageItem from './CountryPageItem'
import BackButton from './BackButton'
const CountryPage = () => {

    const {id} = useParams()
    const [country,setCountry] = useState([])
    
    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`${nameUrl}/${id}`)
                setCountry(response.data)  
            } catch (error) {
                console.error(error) 
            }
        }
        fetchCountry()
    },[id])
    
    
    return (
        <div className="bg-gray-100 dark:bg-gray-700">
            <div className="md:h-screen mx-10 ">
            <BackButton/>
            <div>
            {country.map((item,key)=>{
                return(
                    <div key={key}>
                    <CountryPageItem
                        flag={item.flag}
                        nativeName={item.nativeName}
                        name={item.name}
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
