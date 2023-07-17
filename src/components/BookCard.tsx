import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  // console.log(book);
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title: {book.title}</h2>
        <p>by {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <div className="card-actions">
          <Link to={`/book-detail/${book?._id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
