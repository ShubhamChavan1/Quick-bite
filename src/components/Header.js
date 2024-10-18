import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DarkContext } from "../utils/DarkContextProvider";
import { useSelector } from "react-redux";



const Header = () => {
    const [state, setSTATE] = useState("Sign In")
    const OnlineStatus = useOnlineStatus();


    const handleOnClick = () => {
        state === "Sign In" ? setSTATE("Sign Out") : setSTATE("Sign In")
    }

    //subscribing to the state of cart items
    const CartItems = useSelector((store) => store.cart.items)

    const { toggleTheme, Theme, darkState } = useContext(DarkContext);
    // console.log(toggleTheme, darkState, Theme)
    return (
        <nav className="flex justify-center h-[100px] drop-shadow-md " style={
            {
                backgroundColor: Theme === 'white' ? 'white' : '#1d2125',
                color: Theme === 'white' ? 'black' : 'white'
            }}>
            <div className="my-2 ml-[100px] ">
                <Link to="/"><img className="w-[100px] h-[85px] object-contain" src={LOGO_URL} alt="logo" /></Link>
            </div>

            <div className="flex justify-between items-center">
                <ul className="flex justify-between items-center p-5 mt-5 ">
                    <li className="mx-5 text-lg">
                        <button className={`px-3 py-2 mx-2 rounded-md ${Theme === 'white' ? 'bg-black' : 'bg-white'}
                         ${Theme === 'white' ? 'text-white' : 'text-black'} `}
                            onClick={toggleTheme}>
                            Dark Mode : {darkState}
                        </button>
                    </li>
                    <li className="mx-5 text-lg hover:underline"><Link to="/">Home</Link></li>
                    <li className="mx-5 text-lg hover:underline" ><Link to="/about">About</Link></li>
                    <li className="mx-5 text-lg hover:underline"><Link to="/cart">Cart - ({CartItems.length} items)</Link></li>
                    <div className="mb-3">
                        <button className="mx-5 rounded-md bg-gray-500 text-lg px-3 py-2" onClick={handleOnClick}>{state}</button>
                    </div>

                </ul>
            </div>
        </nav>
    );
}

export default Header;