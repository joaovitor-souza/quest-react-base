import React from 'react'

const messageAlert = (label) =>{
    alert(`A label desse botão é ${label}`)
}

const Label = ({label}) => {
    return (
        <button onClick ={() =>messageAlert(label)}>{label}</button>
    ) 
}

export default Label