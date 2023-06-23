import React from 'react'
import './index.css'

const Label = ({label}) => {
    return<button className='style-button' onClick ={() => alert(`A label desse botão é ${label}`)}>{label}</button>
}

export default Label