import React from 'react'
import Paragraph from '../../Paragraph';
const CountryPageItem = (props) => {
    const currency = props.currencies.map((item)=>{
        return item.name + ""
    })
    const languages = props.languages.map((item)=>{
        return item.name + ""
    })
    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-x-10">
                <div>
                    <img className="w-3/4 md:w-full md:max-w-screen xl:max-w-lg" src={props.flag} alt={props.nativeName} />
                </div>
                <div className="flex flex-col self-center">
                    <h1 className="font-bold text-2xl lg:text-3xl mb-6 mt-6 md:mt-0">{props.name}</h1>
                <article className="grid md:grid-cols-2 gap-x-6">
                    <div className="mb-6">
                        <Paragraph desc={"Native Name"} value={props.nativeName}/>
                        <Paragraph desc={"Population"} value={props.population}/>
                        <Paragraph desc={"Region"} value={props.region}/>
                        <Paragraph desc={"Subregion"} value={props.subregion}/>
                    <div className="flex mt-10 items-center">
                        <Paragraph desc={"Border Countries"}/>
                        <div className="flex">{props.borders.map((item)=>{
                            return(
                                <span className="px-7 mx-2 bg-white shadow dark:bg-gray-600 rounded">
                                    {item + " "}
                                </span>
                            )
                        })} </div>
                    </div>
                    </div>
                    <div className="pb-10">
                        <Paragraph desc={"Top Level Domain"} value={props.topLevelDomain}/>
                        <Paragraph desc={"Currencies"} value={currency}/>
                        <Paragraph desc={"Languages"} value={languages}/>       
                    </div>
                </article>
                </div>
            </div>
        </div>
    )
}

export default CountryPageItem
