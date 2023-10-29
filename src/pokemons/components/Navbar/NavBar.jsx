import { Link, NavLink } from "react-router-dom";
import { SearchBar } from "../../components";
import style from "./NavBar.module.css";
import pokedex from '../../../assets/pokedex.png'
import burguer from '../../../assets/hamburguesa.svg'
import door from '../../../assets/door.svg'

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_container}>
        
        <div className={style.container_logo}>

        <img className={style.nav_logo} src={pokedex} alt="" />
        </div>

        <div className={style.nav_search}>
            <SearchBar />
            
        </div>


        <label for="menu" className={style.nav_label}>
          <img className='nav_img' src={burguer} alt="burguer" />
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
              <img  src={door} alt="" />
          </Link>
        </div>

        

      </div>
    </nav>
  );
};
