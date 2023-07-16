import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Not Found</h1>
          <p className="py-6">The page you are looking for is not found</p>
          <button className="btn btn-primary">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
