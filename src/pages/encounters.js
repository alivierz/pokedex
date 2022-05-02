import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getEncounter from "../services/getEncounter"
import './encounter.css'

const Encounters = () => {

    const poke = useParams()

    const [ locations , setLocations ] = useState([])


    useEffect(() => {
        getEncounter(poke.id).then((res) =>{
            setLocations(res.data)
        })
    })


    const list = locations.map((loca) => <span key={loca.location_area.name}> {loca.location_area.name.replaceAll('-',' ')}</span>)
    return(
        <div className="encounter-container">
            <h2>{poke.id} encounters</h2>
            <div className="list-span">
                {list}
            </div>
        </div>
    )
}
export default Encounters