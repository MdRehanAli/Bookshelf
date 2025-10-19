import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBooks }) => {
    // const books = use(bookPromise)
    // console.log(singleBooks)

    const { bookName, bookId, image, rating, category } = singleBooks

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='p-3 bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStar></FaStar> </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;