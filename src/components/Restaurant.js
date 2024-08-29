
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const Restaurant = () => {

    const { resId } = useParams();

    const ResInfo = useRestaurantMenu(resId);

    if (ResInfo === null) {
        return <Shimmer />
    }

    const { avgRating, totalRatingsString, costForTwoMessage, cuisines } = ResInfo?.cards[2].card.card.info

    const { text } = ResInfo?.cards?.[0]?.card?.card

    const { title: title1 } = ResInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    const { title: title2 } = ResInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card



    return (
        <>
            <div className="res-title">
                <h1>{text}</h1>
            </div>
            <div className="Restaurant-container">
                <div className="restaurant-details">
                    <h3> avgRating : {avgRating}  , {totalRatingsString}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h3>{costForTwoMessage}</h3>
                    <div />
                </div>

                <div className="ResInfo">
                    <h1>{title1}</h1>
                    <div className="ResInfo-items">
                        <h3>Menu items</h3>
                    </div>
                </div>

                <div className="ResInfo">
                    <h1>{title2}</h1>
                    <div className="ResInfo-items">
                        <h3>menu items</h3>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Restaurant;