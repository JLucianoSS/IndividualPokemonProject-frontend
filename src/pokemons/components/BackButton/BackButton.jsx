import { useNavigate } from "react-router-dom";
import style from './BackButton.module.css'
import imagen from '../../../assets/arrow_back.svg'

export const BackButton = () => {
  const navigate = useNavigate();

  const onHandleClick = () => navigate(-1); //navega hacia atrás

  return (
    <div className={style.container_back_button}>
      <button className={style.back_button} onClick={onHandleClick}>
        <img src={imagen} alt="backbutton" />
         Back
      </button>
    </div>
  );
};
