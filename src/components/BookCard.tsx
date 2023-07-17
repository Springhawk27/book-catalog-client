import { IBook } from '@/types/globalTypes';

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title: {book.title}</h2>
        <p>by {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
