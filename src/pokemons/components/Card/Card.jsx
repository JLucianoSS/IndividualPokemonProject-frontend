

import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/capitalized'
import styles from './Card.module.css'
import './Colores.module.css'

export const Card = ( {id,name,images,types} ) => {

  // const typeColors = {
  //   normal: 'normal',
  //   fighting: 'fighting',
  //   poison:'poison',
  //   ground:'ground',
  //   rock:'rock',
  //   bug:'bug',
  //   ghost:'ghost',
  //   steel:'steel',
  //   fire:'fire',
  //   water:'water',
  //   grass:'grass',
  //   electric:'electric',
  //   psychic:'psychic',
  //   ice:'ice',
  //   dragon:'dragon',
  //   dark:'dark',
  //   fairy:'fairy',
  //   unknown:'unknown',
  //   shadow:'shadow',
  // };


  return (
    <div className={styles.container_card}>
        <Link to={`/detail/${id}`} >
          <img className={styles.img} src={images} alt={name}/>
        </Link>
        <h4 className={styles.id}>#{id}</h4>
        <Link className={styles.name} to={`/detail/${id}`}>
            <h2 >{capitalizeFirstLetter(name)}</h2>
        </Link>

        <div className={styles.container_types}>
          {types.map((type) => {

            
            return <span className={`${styles.color_type}`}>{type.name}</span>
          }
          )}
        </div>
        
    </div>
  )
}


