import BookCard from '@/components/BookCard';
import { useGetAllBooksQuery } from '@/redux/features/books/bookApi';
import { setGenre, setPublicationDate } from '@/redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { useState } from 'react';

const Books = () => {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);

  const { genre, publicationDate } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  const genres = new Set<string>(data?.data.map((book: IBook) => book?.genre));

  const handleSlider = (value: number) => {
    console.log(value);
    dispatch(setPublicationDate(value));
  };

  let booksData;

  if (genre) {
    booksData = data?.data?.filter(
      (item: { genre: string; publicationDate: number }) =>
        item.genre === genre && item.publicationDate < publicationDate!
    );
  } else if (publicationDate! > 1800) {
    booksData = data?.data?.filter(
      (item: { publicationDate: number }) =>
        item.publicationDate < publicationDate!
    );
  } else {
    booksData = data?.data;
  }

  // search
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  if (searchQuery.trim() !== '') {
    booksData = booksData.filter(
      (book: IBook) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="sm:col-span-3 col-span-12 z md:mr-10 mr-0  space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky bg-white top-16 md:h-[calc(100vh-80px)] h-20vh">
          <div>
            <h1 className="text-2xl uppercase">Filter By:</h1>

            <p className="text-purple-400">{genre}</p>
            <div className="flex items-center space-x-2 mt-3">
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1 bg-purple-200">
                  Genre
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li
                    onClick={() => {
                      dispatch(setGenre(''));
                    }}
                    key={genre}
                    className="cursor-pointer hover:bg-base-200"
                  >
                    All
                  </li>
                  {Array.from(genres).map((genre: string) => (
                    <li
                      onClick={() => {
                        dispatch(setGenre(genre));
                      }}
                      key={genre}
                      className="cursor-pointer hover:bg-base-200"
                    >
                      {genre}
                    </li>
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
                min={1900}
                max={2023}
                defaultValue={2023}
                onChange={(event) => handleSlider(Number(event.target.value))}
                className="range range-warning"
              />
            </div>
            <div>From 1900 To {publicationDate}</div>
          </div>
        </div>
        <div className="grid sm:col-span-9 col-span-12  pb-20">
          <div>
            {' '}
            <div className="col-span-3 w-full py-4">
              <input
                type="text"
                placeholder="Search books"
                className="input input-bordered input-warning w-full"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols gap-10 pb-20">
            {booksData?.map((book: IBook) => (
              <BookCard key={book?._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
