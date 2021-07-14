import React from 'react'

const SingleCountry = ({key,flag,name,population,region,capital}) => {
    return (
        <div className="hi">
        <article className="flex justify-center ">
        <div className="flex-col w-4/6 max-w-sm bg-white rounded-md mb-10 shadow-md">
            
            <div className="grid grid-col-2" key={key}>
                <img src={flag} alt={name} />
                <div className="px-5 pb-5">
                <h1 className="my-3 font-bold text-2xl">{name}</h1>
                    <p>
                        <strong>Population: </strong>
                        {population}
                    </p>
                    <p>
                        <strong>Region: </strong>
                        {region}
                    </p>
                    <p>
                        <strong>Capital: </strong> 
                        {capital}
                    </p>
                </div>
                </div>
              
        </div>
        </article>
        </div>
    )
}

export default SingleCountry
