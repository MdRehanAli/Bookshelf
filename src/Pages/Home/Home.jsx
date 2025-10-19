import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import BookDetails from '../BookDetails/BookDetails';

const Home = () => {
    const books = useLoaderData();
    console.log(books);

    return (
        <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;