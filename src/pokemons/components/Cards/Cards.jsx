import { Card } from "../../components"


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
