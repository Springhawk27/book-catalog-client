import { usePostBookMutation } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { useForm } from 'react-hook-form';

interface IAddBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: number;
}

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddBook>();

  //   const dispatch = useAppDispatch();
  const [postComment] = usePostBookMutation();

  const onSubmit = (data: IAddBook) => {
    // console.log(data);
    const options: IBook = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: Number(data.publicationDate),
    };

    console.log(options);
    postComment(options);
  };

  return (
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
            className="input input-bordered w-full max-w-xs"
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
  );
};

export default AddBook;
