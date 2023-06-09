import React from 'react'

const Legend = ({description, color, textTransform}) => {
    return (
        <div style={{backgroundColor: color}}> 
            <p style={{textTransform: textTransform}}>{description}</p>
        </div>
    )
}

Legend.defaultProps = {
    color: 'red',
    description: 'Texto padrão'
}

export default Legend
