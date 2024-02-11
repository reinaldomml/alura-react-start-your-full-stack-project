import { useEffect, useState } from 'react'
import './app.css'
import { deleteFavorities, getFavorities } from '../services/favorities'

function Favorites() {
    const [favorities, setFavorities] = useState([])

    async function fetchFavorities() {
        const favoritiesfromAPI = await getFavorities()
        setFavorities(favoritiesfromAPI)
    }

    async function removeFavoritie(id) {
        await deleteFavorities(id)
        await fetchFavorities()
        alert(`Livro de id:${id} removido!`)
    }

    useEffect(() => {
        fetchFavorities()
    }, [])

    return (
        // <div className='App'>
        //     {favorities.map((favoritie) => (
        //         <p>{favoritie.title}</p>
        //     ))}
        // </div>
        <div>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        {favorities.map((favoritie) => (
                            <div
                                onClick={() => removeFavoritie(favoritie.id)}
                                className='bg-base-100 p-4 mt-4 rounded-md cursor-pointer'
                            >
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <p className='text-4xl font-bold text-neutral-content'>
                                            {favoritie.title}
                                        </p>
                                        <p className='text-primary text-sm mt-1 bg-de'>
                                            0{favoritie.id}
                                        </p>
                                    </div>
                                    <img src={favoritie.src} alt={favoritie.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites
