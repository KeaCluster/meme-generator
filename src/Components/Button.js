import React, {useState} from 'react';
import './Button.css'

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
            <div className='counter--count'>
                <h1>{counter}</h1>
            </div>
            <button className='counter--minus' onClick={add}>+</button>
        </div>
    )
}

export default Button