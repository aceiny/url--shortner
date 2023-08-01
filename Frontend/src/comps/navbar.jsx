import React from "react";
import { Link } from "react-router-dom";
const NavBar = () =>  {
    return (
        <div className=" flex justify-between items-center px-[110px] py-[30px] ">
            <div>
                <h1 className="text-[32px] font-[700]">Logo Or image</h1>
            </div>
            <div>
                <ul className="flex justify-between items-center gap-6 text-[20px] font-[500]">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/contact"><li>Contact me</li></Link>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar