import React, {useState} from 'react';
import './Button.css'
import Count from './Count'

const Button  = () => {
    const [counter, setCounter]= useState(0);
    const add = () => {
        setCounter(prevCounter => prevCounter +1)
    }
    const res = () => {
        setCounter(prevCounter => prevCounter -1)
    }

    return (
        <div className='counter'>
            <button className='counter--minus' onClick={res}>-</button>
            <Count number={counter} />
            <button className='counter--minus' onClick={add}>+</button>
        </div>
    )
}

export default Button