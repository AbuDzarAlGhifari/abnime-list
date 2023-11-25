import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Characters() {
    const {id} = useParams()

    const style = {
        whiteSpace: 'pre-line',
    };

    //state
    const [character, setCharacter] = React.useState([])
    const [voices, setVoices] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    //destructure character
    const {images, name, name_kanji, about } = character

    //get character based on id
    const getCharacter = async (character) => {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${character}`)
        const data = await response.json()
        setCharacter(data.data)
        console.log(data.data)
    }    

    //get Voice
    const getVoices = async (character) => {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${character}/voices`)
        const data = await response.json()
        setVoices(data.data)
        console.log(data.data)
    }

    //initial render
    useEffect(() => {
        getCharacter(id)
        getVoices(id)
    }, [])

    return (
    <div className="justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700">

        <div className=" flex bg-slate-600 p-4 mx-6 rounded-lg">
            <img 
                className='rounded-lg h-48 sm:h-60 lg:h-96'
                src={images?.webp.image_url} alt="" 
            />
            <div className=" ml-10 text-white text-xs sm:text-sm lg:text-lg">
                <span className='text-yellow-200 text-sm sm:text-lg lg:text-2xl font-kenia'>{name}</span>
                <span className='text-yellow-200 text-sm sm:text-lg lg:text-2xl font-kenia'> {name_kanji}</span>
                <h3 style={style} className=''>
                    {showMore ? about : about?.substring(0, 250) + '...'}
                    <button
                     className='text-yellow-300 font-semibold'
                     onClick={() => {
                        setShowMore(!showMore)
                        }}>{showMore ? 'Show Less': 'Read More'}
                    </button>
                </h3>
            </div>
        </div>

        <h1 className="mx-6 mt-5 pt-4 px-4 font-kenia text-decoration-line: underline text-white lg:text-lg bg-slate-600 rounded-t-lg">Voice Actor - Seiyuu</h1>
        <div className="mx-6 p-4 grid grid-cols-3  gap-5 sm:grid-cols-4 lg:grid-cols-6 bg-slate-600 text-white rounded-b-lg">
            {voices?.map((voice_actors, index) => {
                const {language} = voice_actors
                const {images, name, mal_id} = voice_actors.person
                return (
                    <Link to={`/seiyu/${mal_id}`} key={index}>
                        <div className='border rounded-md bg-gray-800 p-0.5 hover:p-0 text-white hover:text-black hover:bg-slate-500'>
                            <img className='rounded-t-md w-full h-20 sm:h-40 lg:h-72'
                            src={images?.jpg.image_url} alt="" />
                            <h4 className='text-center'>{name}</h4>
                            <p className='text-center text-yellow-200'>{language}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
    )
}



export default Characters