import BookCard from '@/components/BookCard';
import { useGetAllBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';

const Books = () => {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);

  const genres = new Set<string>(data?.data.map((book: IBook) => book?.genre));

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="sm:col-span-3 col-span-12 z md:mr-10 mr-0  space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky bg-white top-16 md:h-[calc(100vh-80px)] h-20vh">
        <div>
          <h1 className="text-2xl uppercase">Filter By </h1>
          <div className="flex items-center space-x-2 mt-3">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1 bg-purple-200">
                Genre
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Array.from(genres).map((genre: string) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Filter By Year</h1>
          <div className="max-w-xl">
            <input
              type="range"
              min={0}
              max={100}
              defaultValue={40}
              className="range range-warning"
            />
          </div>
          <div>From 0$ To $</div>
        </div>
      </div>
      <div className="grid sm:col-span-9 col-span-12  md:grid-cols-3 sm:grid-cols-2 grid-cols gap-10 pb-20">
        {data?.data.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
