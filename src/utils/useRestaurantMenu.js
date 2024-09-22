import { useEffect, useState } from "react";


//custom hook for restuarant menu data 
const useRestaurantMenu = (resId) => {

    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData(resId);
    }, [resId])

    const fetchData = async (resId) => {
        const data = await fetch(`https://menuproxyserver.onrender.com/api/menu?restaurantId=${resId}`)

        const json = await data.json();

        setResInfo(json.data);
    }
    return ResInfo;
}

export default useRestaurantMenu;