import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="px-12 md:py-24 py-12 flex flex-col  justify-center items-center ">
      <div className=" md:w-2/5 w-full">
        <h3 className="flex justify-start underline">Login Here</h3>

        <LoginForm></LoginForm>
        <div className="flex justify-start pt-4">
          <p>Don't have a account? </p>
          <Link to="/signup" className="ps-1 text-blue-400 ">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
