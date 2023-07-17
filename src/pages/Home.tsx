import BookCard from '@/components/BookCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data?.data);
  return (
    <div>
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
      <div className="px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {data?.data.map((book: IBook) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
