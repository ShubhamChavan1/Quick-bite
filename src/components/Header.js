import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import DarkContext from "../utils/DarkContext";



const Header = () => {
    const [state, setSTATE] = useState("Sign In")
    const OnlineStatus = useOnlineStatus();


    const handleOnClick = () => {
        state === "Sign In" ? setSTATE("Sign Out") : setSTATE("Sign In")
    }

    const { loggedInUser } = useContext(userContext);
    console.log(loggedInUser);
    const { toggleTheme } = useContext(DarkContext);

    return (
        <nav className="flex justify-between h-[100px] shadow-lg  bg-orange-500" >
            <div className="my-2 ml-[100px] ">
                <img className="w-[100px] h-[85px] object-contain" src={LOGO_URL} alt="logo" />
            </div>

            <div className="flex justify-between items-center">
                <ul className="flex p-5 mt-5 ">
                    <li className="mx-5 text-lg">Toggle Dark Mode:
                        <button className="bg-black px-3 py-2 mx-2 text-white rounded-md"
                            onClick={toggleTheme}>
                            Dark Mode
                        </button>
                    </li>
                    <li className="mx-5 text-lg hover:underline">Online Status :{OnlineStatus ? "✅" : "❌"}</li>
                    <li className="mx-5 text-lg hover:underline"><Link to="/">Home</Link></li>
                    <li className="mx-5 text-lg hover:underline" ><Link to="/about">About</Link></li>
                    <li className="mx-5 text-lg hover:underline" ><Link to="/contactus">Contact us</Link></li>
                    <li className="mx-5 text-lg hover:underline"><Link to='/grocery'>Grocery</Link></li>
                    <li className="mx-5 text-lg hover:underline">Cart</li>
                    <div className="mb-3">
                        <button className="mx-5 rounded-md bg-white text-lg px-3 py-2" onClick={handleOnClick}>{state}</button>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Header;