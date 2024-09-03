import { useEffect, useState } from "react";
import { SwiggyMenu } from "./../utils/constants"

//custom hook for restuarant menu data 
const useRestaurantMenu = (resId) => {

    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(SwiggyMenu + resId)

        const json = await data.json();
        setResInfo(json.data);
    }
    return ResInfo;
}

export default useRestaurantMenu;