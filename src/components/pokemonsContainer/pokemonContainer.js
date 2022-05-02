import './pokeContainer.css'
import { useEffect, useState } from "react"
import getPokemon from "../../services/GetPokemon"
import { Link } from "react-router-dom"
const PokemonContainer = ({url}) =>{
    //? Estados de cada pokemon
    const [ pokeName , setPokeName ] = useState('')
    const [ pokeImg , setPokeImg ] = useState('')
    const [ pokeImgBack , setPokeImgBack ] = useState('')
    const [ pokeType, setPokeType ] = useState([])
    const [ stats , setStats ] = useState([])
    const [ backType , setBackType ] = useState('')
    //*Efecto de consolta cada pokemon individual
    useEffect(() =>{
        getPokemon(url.url).then((res) =>{
            setPokeName(res.data.name)
            setPokeImg(res.data.sprites.front_default)
            setPokeImgBack(res.data.sprites.back_default)
            setPokeType(res.data.types)
            setBackType(res.data.types[0].type.name)
            setStats(res.data.stats)
        })
    }, [url])

    //? Litado de tipos y demas
    const types = pokeType.map((value) => <div key={value.slot} className={`${value.type.name}`}> <h3>{value.type.name}</h3> </div>)
    const lvl = stats.map((value) => <li key={value.stat.name} >{value.stat.name}: <span>{value.base_stat}</span></li>)
    return(
        <div className={`pokemonC ${backType}`}>
            <Link to={`/pokedex/pokemon/${pokeName}`} className='link'>
                <div className='pokemonItem'>
                    <h3>{pokeName}</h3>
                    <div className='pokemon-img'>
                        <img src={pokeImg} alt="loading..." />
                        <img src={pokeImgBack} alt="" />
                    </div>
                    <div className='type-cont'>
                        {types} 
                    </div>
                    <ul className='list-stats'>
                        {lvl}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default PokemonContainer