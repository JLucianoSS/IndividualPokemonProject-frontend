import { useEffect, useState } from "react";
import style from "./Statbar.module.css";

export const StatBar = ({stat}) => {

  const [porcentaje, setPorcentaje] = useState(0);

  const cambiarPorcentaje = (nuevoPorcentaje) => {
    if (nuevoPorcentaje >= 0 && nuevoPorcentaje <= 255) {
      setPorcentaje(nuevoPorcentaje);
    }
  };

  useEffect(() => {
    cambiarPorcentaje(stat);
  }, []);

  return (
    <div>
      <div class={style.barra}>
        <div class={style.relleno} style={{ width: `${(porcentaje/255)*100}%` }}></div>
      </div>
    </div>
  );
};
