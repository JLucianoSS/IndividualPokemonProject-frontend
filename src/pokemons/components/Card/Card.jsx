

import { Link } from 'react-router-dom'
export const Card = ( {id,name,images} ) => {
  return (
    <div className='card'>

        <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
        </Link>

        <img src={images} alt={name}/>
        <h4>{id}</h4>
    </div>
  )
}
