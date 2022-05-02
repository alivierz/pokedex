import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './searchBox.css'

const SearchBox = ({filter}) =>{
    //!constante de busqueda por tipo
    const types = ['All pokemons', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock','dark', 'ghost','steel','fire',
                    'water', 'grass','electric','psychic', 'ice', 'dragon', 'fairy']

    const nave = useNavigate()
    //*Estado de checkbox
    const [ check, setCheck ] = useState(true)
    const [ searching, setSearching ] = useState('')
    const [ styleB , setStyleB ] = useState('search-type')

    //? lista de tipos
    const listTypes = types.map((value) => <option key={value} value={value} className='options'>{value}</option>)

    //!funcion del boton
    const dilay = () =>{
        if(check){
            setStyleB('search-name')
            setCheck(false)
        }else{
            setStyleB('search-type')
            setCheck(true)
        }
    }
    return(
        <div className="form">
            <div className="option">
                <span>Type</span>
                <div className="button-container">
                    <button onClick={dilay} className={styleB}/>
                </div>
                <span>Name</span>
            </div>
            <div className="container-pokemon-search">
               {check ? <select name="types" id="" onChange={(e) => filter(e.target.value)} className='select'>{listTypes}</select> : 
                <div className="name-poke"> 
                    <input type='text' onChange={(e) => setSearching(e.target.value.toLowerCase().trim())} className='name-poke-input'
                        onKeyDown={(e) => e.key === 'Enter' ? nave(`/pokedex/pokemon/${e.target.value.toLowerCase().trim()}`) : ''}
                    /> 
                    <Link to={`/pokedex/pokemon/${searching}`} className='name-poke-link'> <FontAwesomeIcon icon={faSearch}/> </Link>
                </div>} 
            </div>
            
        </div>
    )
}
export default SearchBox