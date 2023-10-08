import { addToReadingList } from '@/redux/features/books/readingListSlice';
import { addToWishlist } from '@/redux/features/books/wishListSlice';
import { useAppDispatch } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  // console.log(book);

  const dispatch = useAppDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(book));
  };

  const handleAddToReadingList = () => {
    dispatch(addToReadingList(book));
  };

  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {book.title}</h2>
        <p>by {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <div className="card-actions">
          <Link to={`/book-detail/${book?._id}`} className="btn btn-primary">
            Details
          </Link>
          <button onClick={handleAddToWishlist} className="btn btn-secondary">
            Add to Wishlist
          </button>
          <button
            onClick={handleAddToReadingList}
            className="btn btn-secondary"
          >
            Add to Reading List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
