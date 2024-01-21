
import { useSearchBar } from '../../hooks/useSearchBar';
import style from './SearchBar.module.css'

export const SearchBar = () => {

  const {handleChange,handleKeyPress,input } = useSearchBar();

  return (
    <div className={style.container_search}>
      <input
        className={style.custom_input}
        type="search"
        placeholder="Search Pokemon"
        onKeyUp={handleKeyPress}
        name="name"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};
