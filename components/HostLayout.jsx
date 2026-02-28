import React from "react"
import { Link, Outlet,NavLink } from "react-router-dom"

export default function HostLayout() {
    const styles={
         fontWeight:"bold",
        textDecoration:"underline",
        color:"#161616"
    }


    return (
        <>
            <nav className="host-nav">
                <NavLink to="/host" style={(isActive,isPending)=>console.log(isPending)}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({isActive})=>isActive?styles:null}>Income</NavLink>
                <NavLink to="/host/reviews" style={({isActive})=>isActive?styles:null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}