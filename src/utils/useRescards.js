import { useState, useEffect } from "react"
import { swiggAPI } from "./constants"

//custom hook for generating restuarants
const useRescards = () => {

    const [filterRESTAUARANT, setfilterRESTAURANT] = useState([])
    const [listofRESTAUARANT, setlistofRESTAUARANT] = useState([])

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch(swiggAPI);

        const json = await data.json()

        const Restaurants = json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
        setlistofRESTAUARANT(Restaurants);
        setfilterRESTAURANT(Restaurants);
    }

    //SearchResult

    const [search, setSEARCH] = useState(" ")

    const handleOnChange = (event) => {
        setSEARCH(event.target.value);
    }

    const handleOnclick = () => {

        const searchRESULT = listofRESTAUARANT.filter((res) => {
            return res.info?.name.toLowerCase().includes(search.toLowerCase());
        })
        setfilterRESTAURANT(searchRESULT);
    }

    //top res
    const filterTopRES = () => {
        const topRES = listofRESTAUARANT.filter((res) => {
            return res.info.avgRating >= 4.5
        })
        setfilterRESTAURANT(topRES)
    }


    return {
        filterRESTAUARANT,
        listofRESTAUARANT,
        handleOnclick,
        handleOnChange,
        search,
        filterTopRES
    }
}

export default useRescards;