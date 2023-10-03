import BookReview from '@/components/BookReview';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  console.log(id);

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  console.log(book);

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

          <button className="btn btn-outline btn-primary me-2">Edit</button>
          <button className="btn btn-outline btn-accent ms-2">Delete</button>
        </div>
      </div>
      <BookReview id={id!}></BookReview>
    </>
  );
}
