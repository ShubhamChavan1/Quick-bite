import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/CartSlice";

const ItemList = ({ itemsCards }) => {

    const CartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    //dispatching an action to call reducer of cart
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    const getItemCount = (itemId) => {

        const item = CartItems.find((item) => item.card.info.id === itemId)

        return item ? item.quantity : 0

    }

    // console.log(itemsCards)

    return (
        <>
            {
                itemsCards.map((item) => {

                    const itemId = item.card.info.id;

                    const itemQuantity = getItemCount(itemId)

                    const { vegClassifier } = item.card.info.itemAttribute;


                    return (
                        <div key={itemId} className="p-3 mb-3 flex justify-between  text-left border-black border-solid border-b-2" >
                            <div className="w-9/12">
                                <span className="flex items-center" >
                                    {vegClassifier === "VEG" ?
                                        <div className="border-2 border-green-600 rounded-md px-[5px] py-[2px] text-xs mr-2 text-green-600 w-fit">
                                            ⬤
                                        </div>
                                        :
                                        <div className="border-2 border-red-600 rounded-md px-[5px] py-[2px]  text-xs mr-2 text-red-600 w-fit">
                                            ▲
                                        </div>}
                                    <span>{item.card.info.name}</span>
                                </span>
                                <div className="mt-3 text-xs"> ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>

                                <p className="mt-2 text-gray-500 text-xs">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12  p-4 relative">
                                <img className="w-[144px] bg-orange-200 h-auto object-cover rounded-lg" src={CDN_URL + item.card.info.imageId} alt="food-image" />
                                {
                                    itemQuantity === 0 ?
                                        <button className="text-green-600 hover:bg-slate-200 bg-white shadow-lg px-10 py-[4px] rounded-lg absolute left-7 bottom-0"
                                            onClick={() => handleAddItem(item)}>ADD</button>
                                        :
                                        <div className="bg-white rounded-lg flex items-center shadow-lg  absolute left-7   bottom-0">
                                            <button className="bg-white px-5 py-[4px]  rounded-l-md hover:bg-slate-200 text-green-500" onClick={() => handleAddItem(item)}>+</button>
                                            <span className='text-green-500 mx-2'>{itemQuantity}</span>
                                            <button className="bg-white px-5  py-[4px] rounded-r-md hover:bg-slate-200  text-green-500" onClick={() => handleRemoveItem(item)}>-</button>
                                        </div>
                                }

                            </div>

                        </div>)

                })
            }
        </>

    )
}

export default ItemList