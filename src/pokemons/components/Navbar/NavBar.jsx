import { Link, NavLink } from "react-router-dom";
import { SearchBar } from "../../components";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_container}>
        
        <div className={style.container_logo}>

        <img className={style.nav_logo} src="src\assets\pokedex.png" alt="" />
        </div>

        <div className={style.nav_search}>
            <SearchBar />
            
        </div>


        <label for="menu" className={style.nav_label}>
          <img className='nav_img' src="src\assets\hamburguesa.svg" alt="burguer" />
        </label>
        <input  className={style.nav_input} type="checkbox" id='menu'/>


        <div className={style.nav_menu}>
          {/* <NavLink className={style.nav_item} to="/home">
            Home
          </NavLink> */}

          <NavLink className={style.nav_item} to="/newpokemon">
            New Pokemon
          </NavLink>

          <NavLink className={style.nav_item} to="/about">
            About
          </NavLink>

          <Link className={style.nav_img} to="/">
              <img  src="src\assets\door.svg" alt="" />
          </Link>
        </div>

        

      </div>
    </nav>
  );
};
