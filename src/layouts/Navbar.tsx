import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-red-100">
      <div className="flex-1">
        <div className="font-extrabold pl-2">
          <Link to="/">
            <span className="text-purple-600">Book</span>
            {''}
            <span className="text-yellow-500">~Worm</span>
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <details className="dropdown dropdown-end">
              <summary tabIndex={0}>Profile</summary>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
              >
                <li>
                  <a>Wish List</a>
                </li>
                <li>
                  <a>Reading List</a>
                </li>
                <li>
                  <a>Signup</a>
                </li>
                <li>
                  <a>Signin</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
