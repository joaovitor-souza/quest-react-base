import React from 'react'

const AlertButton = ({label}) => {
    return <button onClick ={() => alert(`A label desse botão é ${label}`)}>{label}</button>
}

export default AlertButton