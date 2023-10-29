import { BackButton } from "../../components";
import style from "./About.module.css";
import imagegit from '../../../assets/git.svg'
import imageIn from '../../../assets/linkedin.svg'
import myImage from '../../../assets/dev.jpeg'

export const AboutPage = () => {
  return (
    <div className={style.container_about}>
      <BackButton />


      <div className={style.container_info}>

        <img src={myImage} alt="dev" />
        <div className={style.container_name_desc}>
          <h1>Jorge Sánchez</h1>
          <p>Proyecto hecho con React, Redux, Node.js, Express y PostgreSQL. Se destaca el manejo de hooks, estados locales y globales con Redux. Altamente comprometido, siempre dispuesto a investigar más y resolver desafíos en busca de soluciones óptimas.
          </p>
        </div>

        <div className={style.container_contact}>
          <a href="https://github.com/JLucianoSS" target="_blank"><img src={imagegit} alt="github" /></a>
          <a href="https://www.linkedin.com/in/jorge-sanchez-191674276/" target="_blank"><img src={imageIn} alt="linkedin" /></a>
        </div>
      </div>
    </div>
  );
};
