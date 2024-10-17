import RES_CARD, { withDiscountTag } from './RES_CARD';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import useRescards from '../utils/useRescards';
import { useContext } from 'react';
import { DarkContext } from '../utils/DarkContextProvider';



const Body = () => {
    const OnlineStatus = useOnlineStatus();

    //higher order component
    const ResPromoted = withDiscountTag(RES_CARD);

    //custom hook for Rescards and serach feature
    const { filterRESTAUARANT,
        listofRESTAUARANT,
        handleOnclick,
        handleOnChange,
        search,
        filterTopRES } = useRescards();

    if (OnlineStatus === false) {
        return <h1>Looks like you are offline</h1>
    }

    const { Theme } = useContext(DarkContext);

    return listofRESTAUARANT.length === 0 ? <Shimmer /> : (
        <div className="body" style={{
            backgroundColor: Theme,
            color: Theme === 'white' ? 'black' : 'white'
        }}>
            <div className="flex  items-center ">
                <div className='flex items-center'>
                    <input data-testid="search input-box" className='m-5 p-2 outline-orange-400 border border-soild font-Swiggy  border-black'
                        placeholder='Search for Restaurants' type="text" value={search} onChange={handleOnChange} />
                    <button className="px-4 py-3  rounded-lg bg-green-600 font-Swiggy" onClick={handleOnclick} >search</button>

                    <button className="p-3 rounded-lg mx-4 bg-gray-400 font-Swiggy" onClick={filterTopRES}>
                        Show Top restaurant
                    </button>
                </div>


            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-4 gap-4">
                    {filterRESTAUARANT.map((restaurant) =>
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                            {
                                restaurant.info?.aggregatedDiscountInfoV3?.header
                                    &&
                                    restaurant.info?.avgRating ?
                                    <ResPromoted res_data={restaurant} /> : <RES_CARD res_data={restaurant} />
                            }
                        </Link>)}
                </div>
            </div>
        </div>

    );
}

export default Body;