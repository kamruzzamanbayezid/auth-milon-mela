import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContent } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {

      const { user, logOut } = useContext(AuthContent);

      const handleSignOut = () => {
            logOut()
                  .then(result => {
                        console.log('log out done');
                  })
                  .catch(error => console.log(error))
      }

      const links = <>
            <li className="text-xl mr-4">
                  <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                        }
                  >
                        Home
                  </NavLink>
            </li>
            <li className="text-xl">
                  <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                        }
                  >
                        Login
                  </NavLink>
            </li>
            <li className="text-xl ml-4">
                  <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                        }
                  >
                        Register
                  </NavLink>
            </li>
            <li className="text-xl ml-4">
                  <NavLink
                        to="/orders"
                        className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                        }
                  >
                        Your Items
                  </NavLink>
            </li>
            {
                  user && <>
                        <li className="text-xl ml-4">
                              <NavLink
                                    to="/profile"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                    }
                              >
                                    User Profile
                              </NavLink>
                        </li>
                        <li className="text-xl ml-4">
                              <NavLink
                                    to="/dashboard"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                    }
                              >
                                    Dashboard
                              </NavLink>
                        </li>
                  </>
            }
      </>

      return (
            <div className="mb-10">

                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          {links}
                                    </ul>
                              </div>
                              <h2 className="text-2xl font-sans font-medium">Auth Milon Mela</h2>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className=" menu-horizontal px-1">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              {
                                    user ? <div>
                                          <span>{user.email}</span>
                                          <a onClick={handleSignOut} className="btn">Sign out</a>
                                    </div>
                                          :
                                          <Link to='/login'><button>Sign In</button></Link>
                              }
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;