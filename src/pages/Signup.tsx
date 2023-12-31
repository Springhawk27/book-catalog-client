import SignupForm from '@/components/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="px-12 md:py-24 py-12 flex flex-col  justify-center items-center ">
      <div className=" md:w-2/5 w-full">
        <h3 className="flex justify-start underline">Signup Here</h3>

        <SignupForm></SignupForm>
        <div className="flex justify-start pt-4">
          <p>Already have a account? </p>
          <Link to="/login" className="ps-1 text-blue-400 ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
