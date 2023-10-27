
import { AppRouter } from './router/AppRouter'
import { useAllPokemons } from './hooks/useAllPokemons'
import './App.css'

const App = () => {

  const { pokemons,isLoading } = useAllPokemons()

  return (
    <div className='App'>
      <AppRouter pokemons= {pokemons} isLoading={isLoading}/>
    </div>
  )
}
export default App
