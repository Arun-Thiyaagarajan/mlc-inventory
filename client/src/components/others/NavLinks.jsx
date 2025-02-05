import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";

const NavLinks = ({ className }) => {
  return (
    <>
      {navLinks.map(({ id, label, icon:Icon, path }) => (
        <li key={id}>
          <NavLink to={path} className={className}>
            <Icon className='lg:hidden' />
            <span>{label}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;