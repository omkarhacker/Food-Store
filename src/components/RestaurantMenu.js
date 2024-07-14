
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    const {resId}=useParams();
    const newResId = resId.substring(1);

    const resInfo=useRestaurantMenu(newResId);

    const [showIndex,setShowIndex]=useState(null);

    if(resInfo===null){
        return <Shimmer/>;
    }

    const { name ,cuisines} = resInfo?.cards?.[2]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};

    

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    return (
        <div className="text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
           <h2 className="font-bold">{cuisines.join(", ")}</h2>
           {
            categories.map((catagory,index)=>(
                <RestaurantCategory 
                key={catagory?.card?.card.title} 
                data={catagory?.card?.card}
                showItems={index===showIndex ? true:false}
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                />
            ))
           }
        </div>
    )
}

export default RestaurantMenu;