import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailAnime() {
    const {id} = useParams()

    //state
    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState([])
    
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, aired, episodes, synopsis, season, images, score, 
        status, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }


    //initial render
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])

    return (
        <div className="container justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700">

            <div className=" flex bg-slate-600 p-4 mx-6 rounded-lg">
                <img 
                    className='rounded-lg h-48 sm:h-60 lg:h-96'
                    src={images?.jpg.large_image_url} alt="" 
                />
                <div className="ml-10 text-white text-xs sm:text-sm lg:text-lg">
                    <ul>
                        <h1 className='text-yellow-200 text-sm sm:text-lg lg:text-2xl font-kenia'>
                        {title}
                        </h1>
                        <li><span>Aired: </span><span className="ml-2 ">{aired?.string}</span></li>
                        <li><span>Episode: </span><span className="ml-2">{episodes}</span></li>
                        <li><span>Score: </span><span className="ml-2">{score}</span></li>
                        <li><span>Status: </span><span className="ml-2">{status}</span></li>
                        <li><span>Source: </span><span className="ml-2">{source}</span></li>
                        <li><span>Season: </span><span className="ml-2">{season}</span></li>
                        <li><span>Sinopsis: </span></li>
                        <li><span className='hidden lg:block sm:block'>
                            {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                            <button onClick={() => {
                                    setShowMore(!showMore)
                                    }}>{showMore ? 'Show Less': 'Read More'}
                            </button>
                        </span></li>  
                    </ul>
                </div>
            </div>
            
            <h3 className="pt-8 items-center text-sm sm:text-lg lg:text-2xl m-2 text-center font-kenia">
                Characters
            </h3>
            <div className="p-4 grid grid-cols-3  gap-5 sm:grid-cols-4 lg:grid-cols-6 bg-slate-600 mx-4 text-white  rounded-lg">
                {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div>
                            <img className='rounded-lg'
                            src={images?.jpg.image_url} alt="" />
                            <h4 className='text-center tex'>{name}</h4>
                            <p className='text-center text-yellow-200'>{role}</p>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}


export default DetailAnime