import { Link } from "react-router-dom"




export const WelcomePage = () => {
  return (
    <>
    <h1>Welcome Page</h1>
    <Link to="/home"><button type="button">Entrar</button></Link>
    </>
  )
}
