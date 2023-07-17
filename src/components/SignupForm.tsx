import { createUser } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook';
import { useForm } from 'react-hook-form';

interface SignupFormInputs {
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInputs) => {
    // console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
  };
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
      <button className="btn btn-outline btn-secondary mt-4">
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
