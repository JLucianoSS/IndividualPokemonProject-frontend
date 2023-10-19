

import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = ( {id,name,images} ) => {
  return (
    <div className={styles.container_card}>

        <h4 className={styles.id}>{id}</h4>
        <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
        </Link>
        <img className={styles.img} src={images} alt={name}/>
    </div>
  )
}
