import React, { useState, useEffect} from 'react';
import './Form.css'

const Form = () => {

    const [meme, setMeme] = useState(
        { topText: "", bottomText: "", randomImage: "" }
    )
    
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    
    const fetchMeme = () => {
        const rand = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[rand].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    const handleChange = event => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input
                    type='text'
                    value={meme.topText}
                    name="topText"
                    className='form--input'
                    onChange={handleChange}
                    placeholder='Top text'
                />
                <input
                    type='text'
                    value={meme.bottomText}
                    name="bottomText"
                    className='form--input'
                    onChange={handleChange}
                    placeholder='Bottom text'
                />
                <button
                    className='form--button'
                    onClick={fetchMeme}>Get a meme</button>
                <div className='meme'>
                    {meme && <img className='meme--image' src={meme.randomImage} alt="" />}
                    <h2 className='meme--text top'>{meme.topText}</h2>
                    <h2 className='meme--text bottom'>{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default Form;