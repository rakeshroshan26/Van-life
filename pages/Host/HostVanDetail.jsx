import React from "react"
import {useParams} from "react-router-dom"
export default function HostVanDetail() {
    const [van,setVan]=React.useState(null)
    const {id}=useParams()

    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
    .then(r=>r.json())
    .then(data=>setVan(data.vans))},[])
    return(
      van?<div key={van[0].id}>
            <img src={`${van[0].imageUrl}`}/>
            <h1>{van[0].name}</h1>
            <p>{van[0].price}</p>
            <p>{van[0].type}</p>
            </div>
            :null
    )
    
 }
