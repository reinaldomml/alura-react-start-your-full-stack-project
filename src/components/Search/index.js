import { useState } from 'react'

function Search() {
    const [query, setQuery] = useState('')

    return (
        <div className='navbar bg-base-100 justify-center'>
            <div className='form-control py-2'>
                <input
                    type='text'
                    placeholder='Escreva sua próxima leitura'
                    className='input input-bordered w-64 lg:w-80'
                    onBlur={(e) => setQuery(e.target.value)}
                />
            </div>
            <button className='btn btn-secondary ml-2'>Buscar</button>
            <div className='badge badge-neutral text-white w-60 h-12 ml-4'>{query}</div>
        </div>
    )
}

export default Search
