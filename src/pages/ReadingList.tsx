import ReadinglistCard from '@/components/ReadinglistCard';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';

const ReadingList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { books } = useAppSelector(
    (state: { readinglist: any }) => state.readinglist
  );
  return (
    <div>
      <h1 className="text-2xl md:px-8 px-4 pt-8 pb-2 ">My Reading List</h1>
      <hr className="md:mx-8 mx-4" />

      <div className="px-8 py-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {books?.map((book: IBook) => (
          <ReadinglistCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ReadingList;
