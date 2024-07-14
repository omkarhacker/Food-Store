import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    // const [showItems,setShowItems]=useState(false);

    const handleClick=()=>{
         setShowIndex();
    };
    //console.log(data);
    const itemCount = data?.itemCards?.length ?? data?.categories?.length ?? 0;
    const items = data?.itemCards ?? data?.categories ?? [];
    return( <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}>
 
           <span className="font-bold text-lg">
                {data.title}({itemCount})
                </span> 
            <span>⬇️</span>
        </div>
        {
            showItems && <ItemList items={items}/>
        }
        </div>
    </div>
    )
}

export default RestaurantCategory;