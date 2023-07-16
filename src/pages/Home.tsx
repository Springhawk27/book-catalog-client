import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello, Book Lover's</h1>
          <p className="py-6">
            Read a Page everyday. Make a habit of reading books. There's a
            saying, "little drops of water make a mighty ocean"
          </p>
          <button className="btn btn-primary">
            {''}
            <Link to="/books">All Books</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
