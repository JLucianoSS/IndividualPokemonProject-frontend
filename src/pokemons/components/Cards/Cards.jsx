import { Card } from "../Card/card"


export const Cards = ( { pokemons } ) => {
  return (
    <div className='cards'>
        {
            pokemons.map( (pokemon) => (
              <Card 
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name}
                images={pokemon.images}
              />
            ) )
        }
    </div>
  )
}
