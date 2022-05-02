import axios from "axios"

const getEncounter = async (name) =>{
    const req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`)
    return req
}

export default getEncounter