import { loginUser } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const onSubmit = (data: LoginFormInputs) => {
    // console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      const { state } = location;
      if (state && state.path) {
        navigate(state.path);
      } else {
        navigate('/');
      }
    }
  }, [user.email, isLoading, location, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-control w-full max-w-xs"
    >
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        id="email"
        placeholder="name@example.com"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        {...register('email', { required: 'Email is required' })}
        className="input input-bordered w-full max-w-xs"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        id="password"
        placeholder="Your password"
        type="password"
        autoCapitalize="none"
        autoCorrect="off"
        {...register('password', { required: 'Password is required' })}
        className="input input-bordered w-full max-w-xs"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button className="btn btn-outline btn-secondary mt-4">Login</button>
    </form>
  );
};

export default LoginForm;
