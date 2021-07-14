import React from 'react'

const Paragraph = ({desc,value}) => {
    return (
        <div>
            <p className="dark:text-gray-300 mb-1">
                <strong className="dark:text-gray-100">
                    {desc}: </strong>
                {value}
            </p>
        </div>
    )
}

export default Paragraph
