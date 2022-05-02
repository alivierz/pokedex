import { useNavigate } from "react-router-dom"
import './nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const NavBar = () =>{
    const prev = useNavigate()

    return(
        <button onClick={() => prev(-1)} className='fixed'> <FontAwesomeIcon icon={faArrowLeft}/> </button>
    )
}
export default NavBar