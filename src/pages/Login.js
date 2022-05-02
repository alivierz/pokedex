import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"

import './login.css'

const Login = ({handlerName}) =>{
    //* Estados
    const [ name, setName ] = useState('')
    //? Funcion de envio
    const Send = (name) =>{
        if(name.trim()){
            handlerName(name)
        }
    }

    return(
        <div className="login">
            <div >
                <h2 className="login-title">Hello Trainer Please Login</h2>
                <div className="login-container">
                    <input type="text" id='log' onChange={(e) => setName(e.target.value)} className='name'/>
                    <Link to='/pokedex' onClick={() => Send(name)} className='login-link'> <FontAwesomeIcon icon={faSignInAlt}/> </Link>
                </div>
            </div>
        </div>
    )
}
export default Login