import { Link, NavLink } from "react-router-dom";
import { SearchBar } from '../../components'

export const NavBar = () => {
  return (
    <nav className="navBar">
      {/* <div>
        <Link className="link" to="/">
          Logo
        </Link>
      </div> */}

      <div className="container">
          <NavLink className="link" to="/home">
            Home
          </NavLink>

          <NavLink className="link" to="/newpokemon">
            New Pokemon
          </NavLink>

          <NavLink className="link" to="/about">
            About
          </NavLink>
      </div>

      <div className="container">
        <ul>
            <SearchBar />
            <Link to="/">
              <button type="button">Logout</button>
            </Link>
        </ul>
      </div>
    </nav>
  );
};
