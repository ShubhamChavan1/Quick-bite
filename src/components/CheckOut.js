import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/CartSlice";
import { TrashCaLogo } from "../utils/TrashCanLogo";
const CheckOut = ({ CheckOutItems }) => {

    console.log(CheckOutItems)

    const dispatch = useDispatch();

    //dispatch an action remove item from cart
    const handleRemoveCart = (item) => dispatch(removeItem(item));

    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="bg-gray-200 w-full min-h-screen p-5">
                <div className="mb-5 mt-10">
                    <span className="text-lg font-bold ml-9">Food items</span>
                    <span className="text-lg font-bold ml-[312px]">Total</span>
                </div>

                {CheckOutItems.map((item) => (
                    <div key={item.card.info.id} className="hover:bg-orange-500  text-black font-bold p-5 rounded-md w-4/5 h-[200px] flex justify-between">
                        <img className="rounded-md mr-5 border-2 border-orange-400 border-solid" src={CDN_URL + item.card.info.imageId} />
                        <div>
                            {item.card.info.name}
                            <div className="mt-5">
                                {item.card.info.inStock ? <span className="bg-green-700 p-3 rounded-md text-white"> In Stock </span> : <div className="bg-red-600 p-3  rounded-md text-white">out of Stock</div>}
                                {item.card.info.isVeg ? <span className="bg-green-700 p-3 rounded-2xl ml-5 text-white">Veg</span> : <span className="bg-red-600 p-3 ml-5 rounded-2xl text-white">Non Veg</span>}
                            </div>

                        </div>
                        <div className="mr-10">₹-{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>
                        <button onClick={() => handleRemoveCart(item.card.info.id)}><TrashCaLogo /></button>
                    </div>
                ))}
            </div>

            <div>

            </div>
        </div>

    );
}


export default CheckOut;
