import React, { useState } from 'react';
import './Form.css'

import memesData from '../Constants/memesData';


const Form = () => {

    const [text, setText] = useState(
        { topText: "", bottomText: "" }
    )

    const handleChange = event => {
        setText(prevText => {
            return {
                ...prevText,
                [event.target.name]: event.target.value
            }
        })
    }

    const [meme, setMeme] = useState();

    const fetchMeme = () => {
        const memesArr = memesData.data.memes
        const rand = Math.floor(Math.random() * memesArr.length)
        const memeImage = memesArr[rand].url
        setMeme(() => memeImage)
    }

    return (
        <main>
            <div className='form'>
                <input
                    type='text'
                    value={text.topText}
                    name="topText"
                    className='form--input'
                    onChange={handleChange}
                    placeholder='Top text'
                />
                <input
                    type='text'
                    value={text.bottomText}
                    name="bottomText"
                    className='form--input'
                    onChange={handleChange}
                    placeholder='Bottom text'
                />
                <button
                    className='form--button'
                    onClick={fetchMeme}>Get a meme</button>
                <div className='meme'>
                {meme && <img className='meme--image' src={meme} alt="Meme" />}
                <h2 className='meme--text top'>{text.topText}</h2>
                <h2 className='meme--text bottom'>{text.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default Form;