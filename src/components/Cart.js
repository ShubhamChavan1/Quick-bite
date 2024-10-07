import { useSelector } from "react-redux";

import CheckOut from "./CheckOut";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)

    return (
        <>
            <div className="text-center font-bold text-xl ">
                {CartItems.length === 0 &&
                    <div className="bg-red-500 h-full p-7">
                        <h1>Looks like your Cart is Empty</h1>
                        <p>Visit the Home our page</p>
                    </div>
                }
            </div>
            <CheckOut CheckOutItems={CartItems} />


        </>
    );
}

export default Cart;