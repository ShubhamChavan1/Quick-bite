import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items)

    return (
        <>
            <div className="text-center font-bold text-xl mt-4">
                Cart
            </div>
            <div className="text-center font-bold text-xl mt-4">
                {CartItems.length === 0 && <h1>Looks like your Cart is Empty</h1>}
            </div>


            <ItemList itemsCards={CartItems} />
        </>
    );
}

export default Cart;