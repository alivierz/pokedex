import axios from "axios"
const getOnePokemon = async (name) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    const req = await axios.get(URL)
    return req
}
export default getOnePokemon