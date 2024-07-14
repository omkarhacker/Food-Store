import { useState,useContext } from "react";
import app_image from "../accets/food-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header=()=>{

    const [setName,setUserName]=useState("Login");

    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);

    return(
        <div className="flex justify-between shadow-md bg-gray-100 p-3">
             <div className="logo-container ">
                <img className="w-28 " src={app_image}></img>
             </div>
             <div className="flex items-center">
                  <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={
                        ()=>{
                           setName==="Login" ? 
                           setUserName("Logout") :
                           setUserName("Login");
                        }
                    }>{setName}</button>
                    <li className="px-4">
                        <Link to="/grocery">{data.loggedInUser}</Link>
                    </li>
                  </ul>
             </div>
        </div>
    )
}

export default Header;