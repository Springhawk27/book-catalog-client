import { addToReadingList } from '@/redux/features/books/readingListSlice';
import { removeFromWishList } from '@/redux/features/books/wishListSlice';
import { useAppDispatch } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';

interface IProps {
  book: IBook;
}

const WishlistCard = ({ book }: IProps) => {
  // console.log(book);
  const dispatch = useAppDispatch();
  const [toastMessage, setToastMessage] = useState('Added to Reading List');

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishList(book));
  };
  const handleAddToReadingList = () => {
    dispatch(addToReadingList(book));
    setToastMessage('Added to Reading List');
    toast.success(toastMessage);
  };

  return (
    <div className="card w-auto bg-base-100 shadow-xl">
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
              className="btn btn-small text-xs border-none"
            >
              Remove from Wishlist
            </button>
            <button
              onClick={handleAddToReadingList}
              className="btn btn-small text-xs border-none"
            >
              Add to Reading List
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default WishlistCard;
