import React, { useState } from 'react';
import './Form.css'

import memesData from '../Constants/memesData';


const Form = () => {

    const [meme, setMeme] = useState();

    const fetchMeme = () => {
        const memesArr = memesData.data.memes
        const rand = Math.floor(Math.random()*memesArr.length)
        const memeImage = memesArr[rand].url
        setMeme(() => memeImage)
    }

    return (
        <main>
            <div className='form'>
                <input type='text' className='form--input' placeholder='Top text' />
                <input type='text' className='form--input' placeholder='Bottom text' />
                <button className='form--button' onClick={fetchMeme}>Get a meme</button>
                {meme && <img src={meme} alt="Meme" />}
            </div>
        </main>
    )
}

export default Form;