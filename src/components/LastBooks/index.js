import { lastBooks } from './dataLastSearch'

function LastBooks() {
    return (
        <section className='p-4'>
            <div className='text-lg mb-2 font-bold'>
                <h1>Últimos lançamentos</h1>
            </div>
            <div className='flex justify-between gap-2'>
                {lastBooks.map((book) => (
                    <div key={book.id}>
                        <img
                            className='rounded-sm hover:opacity-90 cursor-pointer'
                            src={book.src}
                            alt={book.title}
                        />
                        <h2>{book.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LastBooks
