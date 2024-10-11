import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { LOGO_URL } from "../utils/constants";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)

    return (
        <>

            {CartItems.length === 0 ?
                (<div className="font-bold mt-14 flex flex-col justify-center items-center">
                    <img className="w-[271px] h-[256px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
                    <span className="mt-5">Your Cart is Empty</span>
                    <span className="font-normal text-gray-400">You can go to home page to view more restaurants</span>
                    <div className="mt-5">
                        <Link to="/">
                            <button className="bg-orange-500 p-3 rounded-md text-white ">SEE RESTAURANTS NEAR YOU</button>
                        </Link>
                    </div>
                </div>)
                :

                (<div className="min-h-screen bg-gray-200">
                    <div className="grid grid-cols-2 gap-x-4 justify-center align-cente">
                        <div className="w-4/5">
                            <div className="border-solid border-2 border-black w-[500px] h-[100px]">

                            </div>

                        </div>


                        <div className="mt-10 mr-7 p-6 bg-white">
                            <div className="flex justify-center items-center mb-7">
                                <img className="w-20 h-20" src={LOGO_URL} alt="" />
                               
                            </div>
                            <div className="border-b-5 border-black border-solid"></div>
                            <div className="h-[250px] overflow-y-auto ">
                                <ItemList itemsCards={CartItems} />
                                <div className="text-sm">
                                    <span className="font-bold">bill details</span>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>)




            }

        </>
    );
}

export default Cart;