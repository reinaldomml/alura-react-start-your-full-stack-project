import { useEffect, useState } from 'react'
import { getBooks } from '../../services/books'
import { postFavorities } from '../../services/favorities'
// import { books } from './dataSearch'

function Search() {
    const [searchedBooks, setsearchedBooks] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const booksFromAPI = await getBooks()
        setBooks(booksFromAPI)
    }

    async function insertFavorites(id) {
        await postFavorities(id)
        alert(`Livro de id:${id} inserido!`)
    }

    return (
        <div>
            <div className='navbar bg-base-100 justify-center'>
                <div className='form-control py-2'>
                    <input
                        type='text'
                        placeholder='Escreva sua próxima leitura'
                        className='input input-bordered w-64 lg:w-80'
                        onBlur={(e) => {
                            const textTyped = e.target.value
                            const resultSearch = books.filter((book) =>
                                book.title.toLowerCase().includes(textTyped.toLowerCase()),
                            )
                            setsearchedBooks(resultSearch)
                        }}
                    />
                </div>
                <button className='btn btn-secondary ml-2'>Buscar</button>
            </div>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        {searchedBooks.map((book) => (
                            <div
                                onClick={() => insertFavorites(book.id)}
                                className='bg-base-100 p-4 mt-4 rounded-md cursor-pointer'
                            >
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <p className='text-4xl font-bold text-neutral-content'>
                                            {book.title}
                                        </p>
                                        <p className='text-primary text-sm mt-1 bg-de'>
                                            0{book.id}
                                        </p>
                                    </div>
                                    <img src={book.src} alt={book.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
