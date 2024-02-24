import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { isAuth, logout } = useAuth();
  return (
    <nav className="bg-[#ececec] shadow-md px-10 py-5 ">
      <div className="container flex flex-row justify-between">
        <h1>
          <Link to="/" className="select-none text-xl font-bold">
            Task manager
          </Link>
        </h1>

        <ul className="flex gap-x-2">
          {isAuth ? (
            <>
              <li>
                <Link
                  to="/tasks/new"
                  className="transition duration-300  ease-out hover:text-teal-600 border p-2 shadow-none rounded-md hover:shadow-md">
                  Add task
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => logout()}
                  className="transition duration-300  ease-out hover:text-teal-600 border p-2 shadow-none rounded-md hover:shadow-md">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="transition duration-300  ease-out hover:text-teal-600 border p-2 shadow-none rounded-md hover:shadow-md">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="transition duration-300  ease-out hover:text-teal-600 border p-2 shadow-none rounded-md hover:shadow-md">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
