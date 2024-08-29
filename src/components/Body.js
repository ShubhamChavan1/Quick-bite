import RES_CARD from './RES_CARD';
import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import { swiggAPI } from '../utils/constants';
import { Link } from "react-router-dom";


const Body = () => {
    const [listofRES, setlistofRES] = useState([])
    const [search, setSEARCH] = useState(" ")
    const [filterRES, setfilterRES] = useState([])


    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch(swiggAPI);

        const json = await data.json()

        setlistofRES(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRES(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleOnChange = (event) => {
        setSEARCH(event.target.value);
    }

    const handleOnclick = () => {

        const searchRESULT = listofRES.filter((res) => {
            return res.info?.name.toLowerCase().includes(search.toLowerCase());
        })
        setfilterRES(searchRESULT);
    }


    return listofRES.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="container">

                <input className='search-box' type="text" value={search} onChange={handleOnChange} />
                <button className="search" onClick={handleOnclick} >search</button>

                <button className="top-res" onClick={() => {
                    const topRES = listofRES.filter((res) => {
                        return res.info.avgRating >= 4.5
                    })
                    setlistofRES(topRES)
                }}>
                    Show Top restaurant
                </button>

            </div>
            <div className="res-container">
                {filterRES.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RES_CARD res_data={restaurant} /></Link>)}
            </div>
        </div>

    );
}

export default Body;