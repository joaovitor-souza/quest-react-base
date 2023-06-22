import React from 'react'

const StyledText = ({description, color, textTransform}) => {
    return (
        <div style={{backgroundColor: color}}> 
            <p style={{textTransform: textTransform}}>{description}</p>
        </div>
    )
}

StyledText.defaultProps = {
    color: 'red',
    description: 'Texto padrão'
}

export default StyledText
