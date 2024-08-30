import RES_CARD from './RES_CARD';
import Shimmer from './shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import useRescards from '../utils/useRescards';

const Body = () => {


    const OnlineStatus = useOnlineStatus();

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

    return listofRESTAUARANT.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="container">
                <input className='search-box' type="text" value={search} onChange={handleOnChange} />
                <button className="search" onClick={handleOnclick} >search</button>

                <button className="top-res" onClick={filterTopRES}>
                    Show Top restaurant
                </button>
            </div>
            <div className="res-container">
                {filterRESTAUARANT.map((restaurant) =>
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        <RES_CARD res_data={restaurant} />
                    </Link>)}
            </div>
        </div>

    );
}

export default Body;