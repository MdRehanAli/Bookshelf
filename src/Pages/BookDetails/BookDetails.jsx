import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook;

    return (
        <div>
            <h1 className='text-center text-5xl font-bold '>All Book Details are here: </h1>

            <h1 className='text-center text-5xl font-bold '>Book Name: {bookName}</h1>
            <img src={image} alt="Book Image" />
        </div>
    );
};

export default BookDetails;