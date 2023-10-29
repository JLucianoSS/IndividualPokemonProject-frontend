import { BackButton } from "../../components";
import style from './NotFound.module.css'

export const NotFoundPage = () => {
  return (
    <>
      <BackButton />
      <div className={style.container_not_found}>
        <h1>Error 404 - Not Found</h1>
        <img src="https://i.gifer.com/origin/b9/b9e292deead743611f5ae1462e204773_w200.webp" alt="" />
      </div>
    </>
  );
};
