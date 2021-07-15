import React from 'react'
import CountryItem from "../CountryItem"
const Country = ({countries,darkMode}) => {    
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
            {countries.map((item,key)=>{
                return(
                    <div key={key}>
                    <CountryItem
                        darkMode={darkMode}
                        key={item.name}
                        flag={item.flag}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default Country
