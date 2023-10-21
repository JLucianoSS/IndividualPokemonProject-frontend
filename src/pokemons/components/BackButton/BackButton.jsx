import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const onHandleClick = () => navigate(-1); //navega hacia atrás

  return (
    <>
      <button onClick={onHandleClick}>Back</button>
    </>
  );
};
