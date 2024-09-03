
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestuarantCategories";

//for Restaurant Menu card
const Restaurant = () => {

    /* extracating resId from a rescard to display its menu*/
    const { resId } = useParams();

    //Restaurant Menu info
    const ResInfo = useRestaurantMenu(resId);

    if (ResInfo === null) {
        return <Shimmer />
    }

    const { avgRating, totalRatingsString, costForTwoMessage, cuisines } = ResInfo?.cards[2].card.card.info
    // console.log(ResInfo)
    const { text } = ResInfo?.cards?.[0]?.card?.card

    const Categories = ResInfo.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (Card) => {
            return Card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        }
    )


    return (
        <>
            <div className="flex items-center flex-col justify-center font-medium text-lg">
                <h1>{text}</h1>
            </div>
            <div className="flex mt-3 justify-center">
                <div className="flex justify-start w-[800px] h-[200px] rounded-3xl border-[20px] border-solid border-rgba(40, 44, 63, .1)">
                    <div className="font-bold text-left m-3">
                        <h3 className=""> Rating: {avgRating} ,Total Ratings {totalRatingsString}</h3>
                        <h4>{cuisines.join(" , ")}</h4>
                        <h3>{costForTwoMessage}</h3>
                        <div />
                    </div>
                </div>
            </div>
            {Categories.map((eachCategory) => {
                return <RestaurantCategories key={eachCategory?.card.card.title}
                    data={eachCategory?.card?.card} />
            })}


        </>
    );
}

export default Restaurant;