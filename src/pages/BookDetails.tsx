import {
  useDeleteBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface IUpdateBook {
  review: string;
}

export default function BookDetails() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const { data: book } = useSingleBookQuery(id);
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

  // Review
  const [updatedReview, setUpdatedReview] = useState('');
  console.log(updatedReview);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateBook>();

  const [updateBookMutation] = useUpdateBookMutation();

  const [showToast, setShowToast] = useState(false);

  const [message, setMessage] = useState<string | null>(null);
  const [messageCode, setMessageCode] = useState<number | null>(null);

  const onSubmit = async (data: IUpdateBook) => {
    const options: Partial<IBook> = {
      reviews: [...book.data.reviews, data.review],
    };

    try {
      const response = await updateBookMutation({ id, data: options });
      if ('error' in response) {
        setMessage('Failed to update the book. Please try again.');
        setShowToast(true);
        setMessageCode(0);
      } else {
        setMessage('Review added successfully.');
        setShowToast(true);
        setMessageCode(1);
        navigate(`/book-detail/${id}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setShowToast(true);
      setMessageCode(0);
    }
  };

  useEffect(() => {
    if (book) {
      setUpdatedReview('');
    }
  }, [book]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {showToast && messageCode === 1 && (
        <div className="toast toast-top toast-center bg-success rounded-md mt-4">
          <div className="alert alert-success">
            <span>{message}</span>
          </div>
        </div>
      )}
      {showToast && messageCode === 0 && (
        <div className="toast toast-top toast-center bg-error rounded-md mt-4 text-white">
          <div className="alert alert-error">
            <span>{message}</span>
          </div>
        </div>
      )}
      <div className="flex flex-col max-w-7xl mx-auto items-center justify-center md:py-24 py-12">
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
        {/* Review */}
        <div>
          <h2>Review</h2>
          <p>{book?.data?.reviews.join('\n')}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control w-full max-w-xs"
        >
          <label className="label">
            <span className="label-text">Add Review</span>
          </label>
          <input
            id="review"
            placeholder="book review"
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            {...register('review', { required: 'Review is required' })}
            value={updatedReview}
            onChange={(e) => setUpdatedReview(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.review && <p>{errors.review.message}</p>}
          <button className="btn btn-outline btn-secondary mt-4">
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
}
