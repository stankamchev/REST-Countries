import React,{useState,useEffect} from 'react'
import axios from "axios"
import { nameUlr, nameUrl } from "../../data"
import { useParams } from 'react-router'
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import Paragraph from '../Paragraph'
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
    
    console.log(country)
    return (
        <div className="h-screen">
            <div className="mx-10 ">
            <Link to={"/"} className="cursor-pointer">
                <button className="bg-white w-24 h-8 rounded shadow-md my-10">
                    {/* <i><FiArrowLeft/></i> */}         
                    Back
                </button>
            </Link>
            {country.map((item)=>{
                return(
                    <div>
                        <div>
                            <img src={item.flag} alt={item.name} />
                        </div>
                        <article>
                            <Paragraph desc={"Native Name"} value={item.nativeName}/>
                            <Paragraph desc={"Population"} value={item.population}/>
                            <Paragraph desc={"Region"} value={item.nativeName}/>
                            <Paragraph desc={"Subregion"} value={item.nativeName}/>

                            <Paragraph desc={"Top Level Domain"} value={item.nativeName}/>
                            <Paragraph desc={"Currencies"} value={item.nativeName}/>
                            <Paragraph desc={"Languages"} value={item.nativeName}/>
                        </article>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default CountryPage
