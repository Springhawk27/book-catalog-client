import { useForm } from 'react-hook-form';

const SignupForm = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <input
        type="text"
        placeholder="example@email.com"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default SignupForm;
