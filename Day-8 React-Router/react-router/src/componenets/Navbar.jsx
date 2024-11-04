import React from 'react'
import { Link ,Outlet} from "react-router-dom";

export default function Navbar() {

  const navStyle = {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 4rem",
    border:"1px solid",
    margin:"20px 0px"

  }



  const ulStyle = {
    textDecoration: "none", color: "white", display: "flex", listStyleType: "none",
    gap: "2rem"
  }
  return (
   <>
    <div style={navStyle}>
      <h3>React Router</h3>
      <ul className="flex" style={ulStyle}>
        <Link to="/" > <li className="flex">home</li></Link>
        <Link to="/products" > <li className="flex">products</li></Link>
        <Link to="/blog" > <li className="flex">blog</li></Link>
        <Link to="/contact" > <li className="flex">contact</li></Link>
      </ul>
    </div>
   <Outlet />
   </>
  )
}
