import { CDN_URL } from "../utils/constants";



const RestaurantCard=(props)=>{

    const {resData}=props;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-orange-100 hover:bg-orange-200">

            <img  
            className="rounded-lg" 
            alt="res-logo" 
            src={CDN_URL+resData.info.cloudinaryImageId}/>
              <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
              <h4>{resData.info.cuisines.join(", ")}</h4>
              <h4>{resData.info.avgRating}</h4>
              <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;