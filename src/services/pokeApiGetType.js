import axios from "axios"
const pokeApiGetType = async (type) => {
    const url = `https://pokeapi.co/api/v2/type/${type}`
    const req = await axios.get(url)
    return req
}
export default pokeApiGetType