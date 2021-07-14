import React from 'react'
import Paragraph from '../Paragraph';
const CountryPageItem = (props) => {
    const currency = props.currencies.map((item)=>{
        return item.name
    })
    const languages = props.languages.map((item)=>{
        return item.name
    })
    console.log(props);
    return (
        <div>
            <div className="grid md:grid-cols-2">
                <div className="">
                    <img src={props.flag} alt="pic" />
                </div>
                <article className="grid md:grid-cols-2 place-content-center">
                    <div>
                        <Paragraph desc={"Native Name"} value={props.nativeName}/>
                        <Paragraph desc={"Population"} value={props.population}/>
                        <Paragraph desc={"Region"} value={props.region}/>
                        <Paragraph desc={"Subregion"} value={props.subregion}/>
                    <div className="flex">
                        <Paragraph desc={"Borders"}/>
                        <span>{props.borders + ""} </span>
                    </div>
                    </div>
                    <div>
                        <Paragraph desc={"Top Level Domain"} value={props.topLevelDomain}/>
                        <Paragraph desc={"Currencies"} value={currency}/>
                        <Paragraph desc={"Languages"} value={languages}/>       
                    </div>
                </article>
            </div>
        </div>
    )
}

export default CountryPageItem
