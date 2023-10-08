import {
  markAsFinishedReading,
  markAsUnfinishedReading,
  removeFromReadingList,
} from '@/redux/features/books/readingListSlice';
import { useAppDispatch } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBook;
}

const ReadinglistCard = ({ book }: IProps) => {
  const dispatch = useAppDispatch();

  // console.log(book);
  const handleRemoveFromWishlist = () => {
    dispatch(removeFromReadingList(book));
  };

  const handleMarkAsFinishedReading = () => {
    dispatch(markAsFinishedReading(book));
  };

  const handleMarkAsUnfinishedReading = () => {
    dispatch(markAsUnfinishedReading(book));
  };

  return (
    <div
      className={`card w-auto shadow-xl ${
        book.finishedReading ? 'bg-green-100' : 'bg-red-100'
      }`}
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {book.title}</h2>
        <p>by {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <div className="card-actions flex flex-col justify-center items-center">
          <Link to={`/book-detail/${book?._id}`} className="btn btn-primary">
            Details
          </Link>
          <div className="space-x-2 space-y-2 ">
            <button
              onClick={handleRemoveFromWishlist}
              className="btn btn-small text-xs border-none bg-yellow-100"
            >
              Remove from Reading List
            </button>
            {book.finishedReading ? (
              <button
                onClick={handleMarkAsUnfinishedReading}
                className="btn btn-small text-xs border-none bg-red-200"
              >
                Mark as Unfinished
              </button>
            ) : (
              <button
                onClick={handleMarkAsFinishedReading}
                className="btn btn-small text-xs border-none bg-green-200"
              >
                Mark as Finished
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadinglistCard;
