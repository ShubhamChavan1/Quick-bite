import { useEffect, useState } from "react";
import { SwiggyMenu } from "./../utils/constants"

//custom hook for restuarant menu data 
const useRestaurantMenu = (resId) => {

    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData(resId);
    }, [])

    const fetchData = async (resId) => {
        const data = await fetch(`https://menuproxyserver.onrender.com/api/menu?restaurantId=${resId}`)

        const json = await data.json();

        setResInfo(json.data);
    }
    return ResInfo;
}

export default useRestaurantMenu;