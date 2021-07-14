import React from 'react'

const SingleCountry = ({darkMode,flag,name,population,region,capital}) => {
    return (
        <div className={darkMode ? "dark" : ""}>
        <article className="flex justify-center ">
        <div className="flex-col w-4/6 xl:w-64 max-w-sm bg-white dark:bg-gray-600 rounded-md mb-10 shadow-md cursor-pointer">
            
            <img src={flag} alt={name} />
            <div className="px-5 pb-5">
            <h1 className="my-3 font-bold text-2xl dark:text-gray-100">{name}</h1>
                <p className="dark:text-gray-300">
                    <strong className="dark:text-gray-100">
                        Population: </strong>
                    {population}
                </p>
                <p className="dark:text-gray-300">
                    <strong className="dark:text-gray-100">
                        Region: </strong>
                    {region}
                </p>
                <p className="dark:text-gray-300">
                    <strong className="dark:text-gray-100">
                        Capital: </strong> 
                    {capital}
                </p>
            </div>
            </div>
              
        </article>
        </div>
    )
}

export default SingleCountry
