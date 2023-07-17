import SignupForm from '@/components/SignupForm';

const Signup = () => {
  return (
    <div className="px-12 py-12 flex flex-col  justify-center items-center border-2 border-indigo-600">
      <div className="border-2 border-red-600 md:w-2/5 w-full">
        <h3 className="flex justify-start">Signup Here</h3>
        <SignupForm></SignupForm>
      </div>
    </div>
  );
};

export default Signup;
