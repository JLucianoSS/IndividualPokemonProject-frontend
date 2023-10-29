import { Link } from "react-router-dom";
import style from "./Welcome.module.css";


export const WelcomePage = () => {
  return (
    <div className={`${style.container_welcome} ${style.cursor_aura}`}>

      <Link to="/home">
      <button className={style.animated_button} type="button">Entrar</button>
       
      </Link>
    </div>
  );
};
