import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/CartSlice";
import { TrashCaLogo } from "../utils/TrashCanLogo";
import { LOGO_URL } from "../utils/constants";
const CheckOut = ({ CheckOutItems }) => {

    console.log(CheckOutItems)

    const dispatch = useDispatch();

    const ItemTotal = CheckOutItems.reduce(
        (total, item) => total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)
        , 0)




    const TotalPay = CheckOutItems.length > 0 ? CheckOutItems.reduce(
        (total, item) => {
            return total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)
                + 15 + 81.79
        }
        , 0) : null

    // const formatedTotalPay = TotalPay.toFixed(2) 

    //dispatch an action remove item from cart
     const handleRemoveCart = (item) => dispatch(removeItem(item));

    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="bg-gray-200 w-full min-h-screen p-5">
                <div className="mb-5 mt-10 flex justify-center">
                    <span className="text-lg font-bold ml-9">Food items</span>
                </div>

                {CheckOutItems.map((item) => (
                    <div key={item.card.info.id} className="hover:bg-orange-500 text-sm text-black font-bold p-5 rounded-md w-4/5 h-[150px] flex justify-between">
                        {/* make images of same size box */}
                        <img className="rounded-md mr-5 border-2 border-orange-400 border-solid" src={CDN_URL + item.card.info.imageId} />
                        <div>
                            {item.card.info.name}
                            <div className="mt-5 flex items-center">
                                {item.card.info.inStock ?
                                    <span className="bg-green-700 p-3 rounded-md text-white"> In Stock </span>
                                    : <span className="bg-red-600 p-3  rounded-md text-white">out of Stock</span>}
                                {item.card.info.isVeg ?
                                    <span className="bg-green-700 p-3 rounded-2xl ml-5 text-white">Veg</span>
                                    :
                                    <span className="bg-red-600 p-3 ml-5 rounded-2xl text-white">Non Veg</span>}
                            </div>

                        </div>
                        <div className="mr-10">₹-{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>
                        <button onClick={() => handleRemoveCart(item.card.info.id)}><TrashCaLogo /></button>
                    </div>
                ))}
            </div>


            <div className="flex flex-col justify-center items-center">
                <div className="border-2 border-solid border-black w-[400px] h-[500px] p-5 fixed top-44 ">
                    <div className="flex justify-center mb-4">
                        <img className="h-28 " src={LOGO_URL} />
                    </div>
                    <span className="mb-2 block">Billing Details</span>

                    <div className="flex justify-between mb-2">
                        <span> Item total </span>
                        <span>{ItemTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Delivery</span>
                        <span>₹15</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>GST and Restaurant Charges</span>
                        <span>₹81.79</span>
                    </div>

                    <div className="border-b-2 border-black mb-5"></div>

                    {/* <div className="flex justify-between">To Pay{formatedTotalPay}</div> */}
                </div>
            </div>

        </div>

    );
}


export default CheckOut;
