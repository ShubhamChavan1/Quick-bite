import { useState, useEffect } from "react"


//custom hook for generating restuarants
const useRescards = () => {

    const [filterRESTAUARANT, setfilterRESTAURANT] = useState([])
    const [listofRESTAUARANT, setlistofRESTAUARANT] = useState([])

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://menuproxyserver.onrender.com/api/restaurants?lat=19.0760&lng=72.8777");

        const json = await data.json()

        const Restaurants = json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
        setlistofRESTAUARANT(Restaurants);
        setfilterRESTAURANT(Restaurants);
    }

    //SearchResult
    const [search, setSEARCH] = useState(" ")

    const handleOnChange = (event) => {
        // console.log(event.currentTarget)
        setSEARCH(event.target.value);
    }

    const handleOnclick = () => {

        const searchRESULT = listofRESTAUARANT.filter((res) => {
            return res.info?.name.toLowerCase().includes(search.toLowerCase());
        })
        setfilterRESTAURANT(searchRESULT)
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