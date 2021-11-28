import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
      Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;