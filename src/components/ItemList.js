import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ itemsCards }) => {

    const dispatch = useDispatch()

    //dispatching an action to call reducer of cart
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    // console.log(itemsCards)

    return (

        <div>
            {itemsCards.map((item) => (

                <div key={item.card.info.id} className="p-3 mb-3 flex justify-between  text-left border-black border-solid border-b-2" >

                    <div className="w-9/12">

                        <span>{item.card.info.name}</span>
                        <span className="mx-1"> ₹-{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        <p className="mt-3 p-5 text-gray-500 font-mono">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12  p-4 relative">
                        <img className="w-[200px] h-[144px]" src={CDN_URL + item.card.info.imageId} alt="food-image" />
                        <button className=" absolute bottom-1 left-1/2 transform -translate-x-1/2 border-black border-solid border-2 bg-black hover:bg-white hover:text-black text-white p-2"
                            onClick={() => handleAddItem(item)} >ADD+</button>
                    </div>

                </div>

            ))}
        </div>


    );

}

export default ItemList