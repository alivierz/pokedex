import axios from "axios"
const pokeApiGet = async (init, end) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${init}&offset=${end}`
    const req = await axios.get(url)
    return req
}
export default pokeApiGet