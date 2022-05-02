import './home.css'

import { useEffect, useState } from "react"


import pokeApiGet from "../services/pokeapiGet"
import pokeApiGetType from "../services/pokeApiGetType"


import SearchBox from "../components/Serachbox/searchBox"
import PokemonContainer from "../components/pokemonsContainer/pokemonContainer"

const HomePage = ({trainer}) =>{    
    //* Estados de la generacion de lista de pokemon
    const [ init ] = useState(9)//* lista general
    const [ end , setEnd ] = useState(0)//*Lista general

    const [ cut , setCut ] = useState(0)
    const [ finalCut, setFinalCut ] = useState(9)

    const [ filter , setFilter ] = useState('All pokemons')//? estado para filtrar
    const [ pokemons , setPokemons ] = useState([])//? estado para guardar pokemons
    const [ pokeType , setPokeType ] = useState([])

    //?efecto de la pokeApi
    useEffect(() =>{
            if(filter === 'All pokemons'){
            pokeApiGet(init, end).then((res) =>{
                setPokemons(res.data.results)
                setPokeType([])
            })
            }else{
                pokeApiGetType(filter).then((res) =>{
                    setPokeType(res.data.pokemon)
                })
            }
        
    },[init, end, filter])


    //*lista de pokemones
    const listPokemonUrl = pokemons.map((value) => <PokemonContainer key={value.name} url={value}/>)
    const listPokemonUrlType = pokeType.map((value) => <PokemonContainer key={value.pokemon.name} url={value.pokemon}/>)
    const cutListPokemon = listPokemonUrlType.slice(cut, finalCut)
    //? Funcion de paginas  todos los pokemons
    const Prev = () =>{
        if(end > 0){
            setEnd(end - 9)
        }
    }
    const Next = () =>{
        setEnd(end + 9)
    }

    //? funcion de pokemons por tipo
    const NextT = () =>{
        if(finalCut >= listPokemonUrlType.length){ return }
        setCut(cut + 9)
        setFinalCut(finalCut + 9)
    }
    const PrevT = () =>{
        if(cut <= 0){ return }
        setCut(cut - 9)
        setFinalCut(finalCut - 9)
    }

    return(
        <div className='pokedex'>
          <h1>Pokedex</h1>
          <div className='container-search'>
            <h2>Hello {trainer} thta's my pokedex</h2> 
            <SearchBox filter={setFilter} />  
          </div>
          
          <main className='main'>
            {pokeType.length ? cutListPokemon : listPokemonUrl}
          </main>
          {pokeType.length ? <div> <button onClick={PrevT}>Prev</button> <button onClick={NextT}>Next</button> </div> : 
          <div> <button onClick={Prev}>Prev</button> <button onClick={Next}>Next</button> </div>}
        </div>
    )
}
export default HomePage