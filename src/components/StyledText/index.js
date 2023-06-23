import React from 'react'
import './index.css'

const Legend = ({description, color, textTransform}) => {
    return (
        <div className='style-text' style={{backgroundColor: color}}> 
            <p style={{textTransform: textTransform}}>{description}</p>
        </div>
    )
}

Legend.defaultProps = {
    color: 'red',
    description: 'Texto padrão'
}

export default Legend
