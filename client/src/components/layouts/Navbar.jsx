// react imports
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaRegBell } from 'react-icons/fa6';
// external imports
import { LogIn, User } from 'lucide-react';
// component imports
import { profileLinks } from "../../constants";
import NavLinks from "../others/NavLinks";
import { logoutUser } from "../../store/slices";
import { showMessage } from "../../hooks";
import { EAntStatusMessage, EUserRoles } from "../../enums";
import AntMessageText from "../others/StatusMessage";
import { AnimEmojis } from "../../config/configData";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  
  let fullName = "";
  let role = "";
  if (isAuthenticated) {
    fullName = user.user.fullName; 
    role = user.user.role;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        showMessage(
          EAntStatusMessage.SUCCESS,
          AntMessageText({
            statusText: 'See You Soon, Chief',
            emoji: AnimEmojis.Wave,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';
        showMessage(
          EAntStatusMessage.ERROR,
          AntMessageText({
            statusText: errorMessage,
            emoji: AnimEmojis.Eyes,
          })
        );
      });
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar border-b vertical-center">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink to="/" className="hidden lg:flex btn btn-ghost text-xl font-bold items-center">
            {/* <PiFlowerLotusDuotone className="size-8" /> */}
            MLC
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box gap-y-1 w-52 mt-3 z-[1] p-2 shadow bg-base-200">
              <NavLinks className='p-2' />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className='menu menu-horizontal gap-x-2'>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {isAuthenticated &&
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaRegBell className="w-5 h-5" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          }
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
              <span className="text-xl">
                {isAuthenticated ? (
                  fullName.charAt(0).toUpperCase()
                ) : (
                  <User />
                )
                }
              </span>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {isAuthenticated ? (
                profileLinks.map(({ id, label, icon: Icon, path }) => {
                  if (role === EUserRoles.ADMIN && label === 'My Favourites') return;
                  if (label === 'Logout') {
                    return (
                      <li key={id}>
                        <Link onClick={handleLogout} className="p-2 flex items-center space-x-2">
                          <Icon className="w-5 h-5" />
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={id}>
                      <Link to={`user/${path}`} className="p-2 flex items-center space-x-2">
                        <Icon className="w-5 h-5" />
                        <span>{label}</span>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  <Link to='/auth/login' className="p-2 flex items-center space-x-2">
                    <LogIn className="w-5 h-5" />
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;