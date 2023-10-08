import BookReview from '@/components/BookReview';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '@/redux/features/books/bookApi';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  console.log(book);

  const [deleteBookMutation] = useDeleteBookMutation();

  const handleDelete = async () => {
    try {
      await deleteBookMutation(id);

      navigate('/books');
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center justify-center md:py-24 py-12">
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.data?.title}</h1>
          <p className="text-xl">By {book?.data?.author}</p>
          <p className="text-xl">Genre: {book?.data?.genre}</p>
          <p className="text-xl">
            Publication Date: {book?.data?.publicationDate}
          </p>

          <button className="btn btn-outline btn-primary me-2">
            {' '}
            <Link to={`/updatebook/${book?.data?._id}`}>Edit</Link>
          </button>
          <button
            className="btn btn-outline btn-accent ms-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <BookReview id={id!}></BookReview>
    </>
  );
}
