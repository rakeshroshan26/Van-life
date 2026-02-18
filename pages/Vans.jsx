import React from "react"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */


export default function Vans() {
    const [vans,setVans]=React.useState([])
    React.useEffect(()=>{fetch("/api/vans")
    .then(r=>r.json())
    .then((data)=>{
   setVans(data.vans)
    })},[])
    const gg=vans.map(van=>{
        return(
            <>
           <img src={`${van.imageUrl}`}/>
           <h2>{van.name}</h2>
           <p>{van.description}</p>
           </>
        )
    })
    return (
        <>
        <h1>Explore our Van options</h1>
        {gg}
        </>
    )
}