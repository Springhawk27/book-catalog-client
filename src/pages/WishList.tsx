import BookCard from '@/components/BookCard';
import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/globalTypes';

const WishList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { books } = useAppSelector(
    (state: { wishlist: any }) => state.wishlist
  );
  return (
    <div>
      <div className="px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        hi there
        {books?.map((book: IBook) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
