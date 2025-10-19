import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {

    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data);
    //             console.log(data)
    //         })
    // }, [])

    // const bookPromise = fetch('/booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-5xl mb-10 text-center'>Books</h1>

            <Suspense fallback={<p>Loading......</p>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        books.map(singleBooks => <Book key={singleBooks.bookId} singleBooks={singleBooks}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;