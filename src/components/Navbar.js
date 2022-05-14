import React from 'react'
import { CgSupport } from "react-icons/cg";
import { FaFlagUsa } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white "style={{borderBottom:"1px solid" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "red", marginTop: ".7rem" , marginLeft:"1.5rem"}} href="#" ><h5>LOGO</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            

                        </ul>
                        <div style={{padding:".3rem"}}>
                            <CgSupport style={{margin:"1rem"}}/>
                            <a style={{marginRight:"2rem"}}>Help</a>

                        </div>
                        <div>
                        <FaFlagUsa/>
                            <a style={{padding:".6rem"}}>Deutsch | EUR</a>
                        
                        </div>
                        <div style={{margin:"1rem",border:"1px solid black",borderRadius:"20px",backgroundColor:"#d2d2d24d",width:"3rem"}}>
                            <BsFillPersonLinesFill style={{margin:".5rem"}}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}