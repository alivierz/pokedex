 import { useEffect } from "react"
import { useParams } from "react-router-dom"
 import getOnePokemon from "../services/getOnePokemon"
import { useState } from "react"
import './pokemon.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const PokemoInfo = () =>{
    const poke = useParams()//*parametro de busqueda

    //? estados del pokemon actual
    const [ pokeName , setPokeName ] = useState('')
    const [ pokeId, setPokeId ] = useState(0)
    const [ pokeImg , setPokeImg ] = useState('')
    const [ pokeType, setPokeType ] = useState([])
    const [ stats , setStats ] = useState([])
    const [ pokeAbili, setPokeAbili ] = useState([])
    const [ body , setBody ] = useState({})
    const [ moves, setMoves ] = useState([])
    const [ pType, setPtype ] = useState('')
    //*Efecto de pokemon 
    useEffect(() =>{
        getOnePokemon(poke.id).then((res) =>{
            setPtype(res.data.types[0].type.name)
            setPokeName(res.data.name)
            setPokeId(res.data.id)
            setPokeImg(res.data.sprites.other['official-artwork'].front_default)
            setPokeType(res.data.types)
            setStats(res.data.stats)
            setPokeAbili(res.data.abilities)
            setBody({h: res.data.height, w: res.data.weight})
            setMoves(res.data.moves)
        })
    },[ poke ])
    //! listado 
    const types = pokeType.map((value) => <h3 key={value.slot} className={value.type.name}>{value.type.name}</h3>)
    const lvl = stats.map((value) => <li key={value.stat.name}>{value.stat.name}: <span>{value.base_stat}</span> </li>)
    const ability = pokeAbili.map((value) => <p key={value.ability.name}>{value.ability.name}</p>)
    const movesList = moves.map((value) => <p key={value.move.name}>{value.move.name}</p>)
    return(
        <div className={`poke-page ${pType}`}>
            <div className="profile">            
            <img src={pokeImg} alt="loadin..." />
            <h2>{pokeName}</h2>    
                <div className="miss">
                    <p>Height: {body.h}</p>
                    <p>#{pokeId}</p>
                    <p>Weight: {body.w}</p> 
                </div>
            </div>
            <div className="info-pasive">
                <div className='types-profile'>
                    {types}
                </div>    
                <div className="ability">
                   {ability} 
                </div>
            </div>
            <ul className="list-profile">
                {lvl}
            </ul>
            <div className="encounter">
                <Link to={`/pokedex/pokemon/${poke.id}/encounters`}> Encounters <FontAwesomeIcon icon={faMapMarkerAlt}/> </Link>
            </div>
            <div className="scroll">
                <div className="list-moves">
                    {movesList}
                </div>
            </div>
            
        </div>
    )
}
export default PokemoInfo