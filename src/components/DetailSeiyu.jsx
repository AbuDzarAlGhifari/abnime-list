import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailSeiyu() {
    const {id} = useParams()

    //state
    const [seiyu, setSeiyu] = React.useState({})
    const [characters, setCharacters] = React.useState([])

    //destructure anime
    const {
        about, name, birthday, 
        images } = seiyu

    //get anime based on id
    const getSeiyu = async (seiyu) => {
        const response = await fetch(`https://api.jikan.moe/v4/people/${seiyu}`)
        const data = await response.json()
        setSeiyu(data.data)
    }


    //initial render
    useEffect(() => {
        getSeiyu(id)
    }, [])

    return (
        <div className="container justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700">
            <h1 className='items-center text-sm sm:text-lg lg:text-2xl m-2 text-center font-kenia'>
                {name}</h1>
            <div className=" flex  bg-slate-600 p-4 mx-6 rounded-lg">
                <img 
                    className='rounded-lg h-48 sm:h-60 lg:h-96'
                    src={images?.jpg.image_url} alt="" 
                />
                <div className="ml-10 text-white text-xs sm:text-sm lg:text-lg">
                    <ul>
                        <li><span>Rank: </span><span className="ml-2">{about}</span></li>
                        <li><span>Score: </span><span className="ml-2">{birthday}</span></li>
 
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default DetailSeiyu