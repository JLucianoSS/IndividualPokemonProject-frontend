import { Link } from "react-router-dom";
import { TypeColores } from "../../components";
import { capitalizeFirstLetter } from "../../utils/capitalized";
import styles from "./Card.module.css";

export const Card = ({ id, name, images, types,attack }) => {
  return (

    <div className={styles.container_card}>
      <Link to={`/detail/${id}`}>
        <img className={styles.img} src={images} alt={name} />
      </Link>
      <h4 className={styles.id}>#{id}</h4>
      <Link className={styles.name} to={`/detail/${id}`}>
        <h2>{capitalizeFirstLetter(name)}</h2>
      </Link>

      <div className={styles.container_types}>
        {types.map((type) => (
          <TypeColores key={type.name} typename={type.name}/>
        ))}
      </div>

    </div>
  );
};
