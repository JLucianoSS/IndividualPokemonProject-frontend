
import { Form, BackButton } from "../../components";
import style from './NewPokemonPage.module.css'

export const NewPokemonPage = () => {

  return (
    <div className={style.container_newpokemon}>
      <BackButton />
      <Form />
    </div>
  );

};
