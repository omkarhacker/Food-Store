
import {CDN_URL} from "../utils/constants";

const ItemList = ({items})=>{
    console.log(items);
    return (
    <div>
        {items.map((item)=>(
            <div  key={item.card?.info?.id || (item.itemCards && item.itemCards.map(card => card.card.info.id).join('_'))}
              className="p-2 m-2 border-gray-200 border-b-2 text-left "
            >
              <div className="flex justify-between">

            <div className="w-9/12">
              <div className="py-2 ">
              <span>{item.card?.info?.name}</span>
              {item.card?.info?.price && (
                  <span className="py-2">- ₹ {item.card?.info?.price}</span>
              )}
              {item.card?.info?.defaultPrice && (
                  <span className="py-2">- ₹ {item.card?.info?.defaultPrice}</span>
              )}
              </div>
              <p className="text-xs">{item.card?.info?.description}</p>
              </div>
              <div className="w-3/12">
              <div className="absolute">
                <button className="p-2 bg-white shadow-lg m-auto">Add +</button>
                </div>
              {item.card?.info?.imageId && (
                  <img className="w-48" src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card?.info?.name} />
              )}
              </div>
              
              
            </div>

            


            {item.itemCards && item.itemCards.map((card) => (
              <div key={card.card.info.id}>
                <div className="flex justify-between">
                
                <div className="w-9/12">
                <span>{card.card.info.name}</span>
                <span className="py-2">- ₹ {card.card.info.price}</span>
                <span>{card.card.info.defaultPrice}</span>
                <p className="text-xs">{card.card?.info?.description}</p>
                </div>
              <div className="w-3/12">
               <div className="absolute">
                <button className="p-2 bg-white shadow-lg m-auto">Add +</button>
                </div>
                 <img src={CDN_URL+card.card?.info?.imageId}className="w-48 p-3" />
                </div>
                </div>
                
              </div> 
            ))}
          </div>
        ))}
        
    </div>
    );
};

export default ItemList;