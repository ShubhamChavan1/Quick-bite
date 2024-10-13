
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestuarantCategories";
import { useContext, useState } from "react";
import { DarkContext } from "../utils/DarkContextProvider";

//for Restaurant Menu card
const Restaurant = () => {


    const { Theme } = useContext(DarkContext)

    const [showIndex, setshowIndex] = useState(null)

    /* extracating resId from a rescard to display its menu*/
    const { resId } = useParams();

    //Restaurant Menu info
    const ResInfo = useRestaurantMenu(resId);

    if (ResInfo === null) {
        return <Shimmer />
    }

    const { avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName ,sla} = ResInfo?.cards[2].card.card.info
    console.log(ResInfo)
    const { text } = ResInfo?.cards?.[0]?.card?.card


    const Categories = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(Categories)


    return (
        <div>
            <div className="flex justify-center mr-[600px] mt-[50px] mb-2  font-bold font-Prox text-2xl">
                <h1>{text}</h1>
            </div>
            <div className="flex justify-center ">
                <div className=" rounded-3xl p-1  bg-gray-300 bg-gradient-to-b from-white">
                    <div className="w-[800px] h-[150px] border-gray-200 border-solid border-2 bg-white font-Prox text-left m-3 p-5 rounded-xl">
                        <p className="font-bold font-Prox">
                            <span className="text-white rounded-full pb-[3px] px-[6px] mr-2 text-sm bg-green-600 leading-none">
                                ★
                            </span>{avgRating} ({totalRatingsString})
                            <span className="text-gray-400 mx-2">•</span>
                            {costForTwoMessage}
                        </p>
                        <h4 className="font-Prox font-bold mt-2 underline text-orange-500">{cuisines.join(",")}</h4>
                        <div className="flex">
                            <div className="flex flex-col leading-none text-gray-500 text-center">
                                <p className="leading-none -mb-3 text-3xl">•</p>
                                <p className="">|</p>
                                <p className="">|</p>
                                <p className="leading-none -mt-3 text-3xl">•</p>
                            </div>
                            <div className="flex flex-col text-sm mx-2 mt-2 mb-1 justify-between font-Swiggy font-bold">
                                <span>{areaName}</span>
                                <span>Delivery Time - {sla.slaString}</span>
                            </div>
                        </div>

                        <div />
                    </div>
                </div>
            </div>
            {
                Categories.map((eachCategory, index) => (
                    <RestaurantCategories key={eachCategory?.card.card.title}
                        data={eachCategory?.card?.card}
                        showItemList={index === showIndex ? true : false}
                        setshowIndex={() => setshowIndex(previndex => previndex === index ? null : index)}
                    />
                ))}

        </div>

    );
}

export default Restaurant;