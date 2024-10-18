import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useRef, useState } from "react";
import { DarkContext } from "../utils/DarkContextProvider";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)

    const itemTotal = CartItems.map((item) => {
        const price = item.card.info.price || item.card.info.defaultPrice
        return (price / 100) * item.quantity;
    }).reduce((acc, curr) => acc + curr, 0)

    const TotalPay = itemTotal + 15

    const [isScrolled, setScrolled] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {

            const container = containerRef.current

            if (container.scrollTop > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        const container = containerRef.current
        container?.addEventListener("scroll", handleScroll)

        return () => {
            container?.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const { Theme } = useContext(DarkContext)


    return (
        <>

            {CartItems.length === 0 ?
                (<div className="min-h-screen" style={{
                    backgroundColor: Theme === "white" ? "white" : "gray",
                    color: Theme === "white" ? "gray" : "black"
                }
                }>
                    <div className="font-bold flex flex-col justify-center items-center">
                        <img className="mt-14 w-[271px] h-[256px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
                        <span className="mt-5">Your Cart is Empty</span>
                        <span className="font-normal text-gray-400">You can go to home page to view more restaurants</span>
                        <div className="mt-5">
                            <Link to="/">
                                <button className="bg-orange-500 p-3 rounded-md text-white ">SEE RESTAURANTS NEAR YOU</button>
                            </Link>
                        </div>
                    </div>
                </div>)
                :

                (<div className="flex justify-center items-center min-h-screen bg-gray-200">
                    <div className="w-[800px]">

                        <div className="mt-2 bg-white">
                            <div
                                ref={containerRef} className={`flex justify-center py-5 mb-5 transition-shadow
                                  ${isScrolled ? "shadow-[0px_4px_5px_-2px_rgba(0,0,0,0.1)]" : " "}`}>
                                <img className=" w-50 h-20" src={LOGO_URL} alt="" />
                            </div>

                            <div ref={containerRef} className={`h-[500px] overflow-y-auto   
                                  p-5 `}>
                                <ItemList itemsCards={CartItems} />
                                <div className="text-sm mt-10">
                                    <span className="font-bold">Bill Details</span>
                                    <div className="flex justify-between text-sm mt-5 text-gray-400">
                                        <span>Item total</span>
                                        <span>₹{itemTotal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-5 text-gray-400">
                                        <span>Dilevery Charges</span>
                                        <span>₹15</span>
                                    </div>
                                    <div className="border-b-black border-2 border-solid mt-5"></div>
                                    <div className="flex justify-between font-bold mt-5  ">
                                        <span>TO PAY</span>
                                        <span>₹{TotalPay}</span>
                                    </div>
                                    <div className="flex justify-center">
                                    <button className="p-3 font-Swiggy hover:bg-white border-orange-400 border-solid border-2 bg-orange-400 rounded-lg">Procced to pay</button>
                                    </div>
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