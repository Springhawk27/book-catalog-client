import {
  useGetReviewQuery,
  usePostReviewMutation,
} from '@/redux/features/books/bookApi';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000000,
  });

  const [postReview, { isLoading, isError, isSuccess }] =
    usePostReviewMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(inputValue);
    event.preventDefault();

    // const options = {
    //   id: id,
    //   review: inputValue,
    // };
    // postReview(options);
    console.log(inputValue);
    postReview({
      id,
      review: inputValue,
    });
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form
        className="flex gap-5 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <textarea
          className="min-h-[30px] border-2 border-blue-300 rounded text-black"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
      <div className="mt-10">
        {data?.reviews?.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
