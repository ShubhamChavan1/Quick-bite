import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/CartSlice";


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
            <div className="text-center font-bold text-xl mt-4">
                Cart
            </div>
            <div className="flex justify-center items-center">
                <button className="p-2 rounded-md m-5 border-black border-solid border-2 bg-black hover:bg-white hover:text-black  text-white"
                    onClick={handleClearCart}>clear Cart</button>
                <button className="p-2 rounded-md m-5 border-black border-solid border-2 bg-black hover:bg-white hover:text-black  text-white"
                    onClick={handleremoveItem}>remove Cart</button>
            </div>
            <div className="text-center font-bold text-xl mt-4">
                {CartItems.length === 0 && <h1>Looks like your Cart is Empty</h1>}
            </div>

            <div className="w-6/12 m-auto">
                <ItemList itemsCards={CartItems} />
            </div>

        </>
    );
}

export default Cart;