import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" >
        CindorApp
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className={({ isActive }) => (isActive ? "active" : "")}>Mis Favoritos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
