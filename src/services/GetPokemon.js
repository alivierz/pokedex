import axios from "axios"
const getPokemon = async (url) => {
    const req = await axios.get(url)
    return req
}
export default getPokemon