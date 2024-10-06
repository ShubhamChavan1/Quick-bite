import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/CartSlice";
import CheckOut from "./CheckOut";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleremoveItem = () => {
        dispatch(removeItem())
    }

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
            {/* <ItemList itemsCards={CartItems} /> */}


        </>
    );
}

export default Cart;