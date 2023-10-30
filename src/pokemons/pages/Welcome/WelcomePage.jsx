import { Link } from "react-router-dom";
import style from "./Welcome.module.css";
import img from "../../../assets/pokedex.png";

export const WelcomePage = () => {
  return (
    <>
      <div className={`${style.container_welcome} ${style.cursor_aura}`}>
      <img className={style.title_pokedex} src={img} alt="pokedex"></img>
        <Link to="/home">
          <button className={style.animated_button} type="button">
            Entrar
          </button>
        </Link>
      </div>
    </>
  );
};
