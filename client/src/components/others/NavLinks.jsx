import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import { EUserRoles } from "../../enums";

const NavLinks = ({ className }) => {
  const { user } = useSelector(state => state.auth);
  const role = user?.user.role;

  return (
    <>
      {navLinks.map(({ id, label, icon: Icon, path, adminOnly }) => {
        if (adminOnly && role !== EUserRoles.ADMIN) return;
        return (
          <li key={id}>
            <NavLink to={path} className={className}>
              <Icon className='lg:hidden' />
              <span>{label}</span>
            </NavLink>
          </li>
        )
      })}
    </>
  );
}

export default NavLinks;