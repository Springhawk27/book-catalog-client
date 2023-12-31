import { usePostBookMutation } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IAddBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: number;
}

const UpdateBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddBook>();

  const [postBook] = usePostBookMutation();

  const [showToast, setShowToast] = useState(false);

  const [message, setMessage] = useState<string | null>(null);
  const [messageCode, setMessageCode] = useState<number | null>(null);

  const onSubmit = async (data: IAddBook) => {
    const options: IBook = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: Number(data.publicationDate),
    };

    try {
      const response = await postBook(options);
      if ('error' in response) {
        setMessage('Failed to create the book. Please try again.');
        setShowToast(true);
        setMessageCode(0);
      } else {
        setMessage('Book created successfully.');
        setShowToast(true);
        setMessageCode(1);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setShowToast(true);
      setMessageCode(0);
    }
  };

  useEffect(() => {
    console.log('showToast:', showToast);
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
        <div
          className={`toast toast-top toast-center bg-success rounded-md mt-4`}
        >
          <div className={`alert alert-success`}>
            <span>{message}</span>
          </div>
        </div>
      )}
      {showToast && messageCode === 0 && (
        <div
          className={`toast toast-top toast-center bg-error rounded-md mt-4 text-white`}
        >
          <div className={`alert alert-error`}>
            <span>{message}</span>
          </div>
        </div>
      )}

      <div className="px-12 md:py-24 py-12 flex flex-col  justify-center items-center ">
        <div className=" md:w-2/5 w-full">
          <h3 className="flex justify-start underline">Add a new book</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full max-w-xs"
          >
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              id="title"
              placeholder="book title"
              type="text"
              autoCapitalize="none"
              autoComplete="title"
              autoCorrect="off"
              {...register('title', { required: 'Title is required' })}
              className="input input-bordered w-full max-w-xs "
            />
            {errors.title && <p>{errors.title.message}</p>}
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              id="author"
              placeholder="book author"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('author', { required: 'Author is required' })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.author && <p>{errors.author.message}</p>}
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              id="genre"
              placeholder="book genre"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('genre', { required: 'Genre is required' })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.genre && <p>{errors.genre.message}</p>}
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              id="publicationDate"
              placeholder="publication date"
              type="number"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('publicationDate', {
                required: 'Publication Date is required',
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.publicationDate && <p>{errors.publicationDate.message}</p>}
            <button className="btn btn-outline btn-secondary mt-4">
              Create Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
