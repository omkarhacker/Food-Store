import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body=()=>{
    

    const [resJs,setListOfRestaurants]=useState([]);

    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const [searchText,setSearchText]=useState("");

    const {loggedInUser,setUserName}=useContext(UserContext);


    useEffect(()=>{
           fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json =await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    };

 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false){
      return(
        <h1>
            looks like you are offline
        </h1>
      )
 }

    

    return resJs.length===0 ? <Shimmer/> : (
        <div className="body ">
            <div className="filter flex">

                <div className="search flex items-center m-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                        <input type="text" 
                        className="border border-gray-300 rounded-lg p-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                         value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                        placeholder="Search Restaurants"
                        ></input>
                        <button className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-sm"
                        onClick={
                            ()=>{
                                const filteredData=resJs.filter(
                                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurant(filteredData);
                            }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center ">
                <button className="px-4 py-2 bg-lime-200 rounded-xl"  
                  onClick={()=>{
                    const filterList=filteredRestaurant.filter(
                        (res)=>res.info.avgRating>4
                    )
                    setFilteredRestaurant(filterList);
                  }}>
                    Top Rated Restaurants
                  </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                       <input className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                  
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {
                    filteredRestaurant.map((x)=>(
                       
                        <Link 
                        key={x.info.id}
                        to={"/restaurants/:"+x.info.id}>
                        <div>
                                <RestaurantCard resData={x} />
                        </div>
                        </Link>
                    ))
                }
              </div>
        </div>
    )
}

export default Body;