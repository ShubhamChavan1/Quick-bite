import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/CartSlice";
import { TrashCaLogo } from "../utils/TrashCanLogo";
const CheckOut = ({ CheckOutItems }) => {

    console.log(CheckOutItems)

    const dispatch = useDispatch();

    const handleRemoveCart = () => dispatch(removeItem());

    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="bg-gray-300 w-full h-full p-5">
                <div className="mb-5 mt-10">
                    <span className="text-lg font-bold ml-9">Food items</span>
                    <span className="text-lg font-bold ml-[312px]">Total</span>
                </div>

                {CheckOutItems.map((item) => (
                    <div key={item.card.info.id} className="hover:bg-orange-500 text-black font-bold p-5 rounded-md w-3/4 h-[150px] flex justify-between">
                        <img className="rounded-md mr-5" src={CDN_URL + item.card.info.imageId} />
                        <div>
                            {item.card.info.name}
                            <div className="mt-5">
                                {item.card.info.inStock ? <div> In Stock </div> : <div>out of Stock</div>}
                            </div>
                        </div>
                        <div className="mr-10">₹-{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>
                        <button onClick={handleRemoveCart}><TrashCaLogo /></button>
                    </div>
                ))}
            </div>
        </div>

    );
}


export default CheckOut;
