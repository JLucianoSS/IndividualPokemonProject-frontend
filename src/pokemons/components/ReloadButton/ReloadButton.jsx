
import style from './RButton.module.css'

export const ReloadButton = ({onClick}) => {
 
  return (
    <div >
      <button className={style.container_button}  onClick={onClick}>Reload</button>
    </div>
  )
};
